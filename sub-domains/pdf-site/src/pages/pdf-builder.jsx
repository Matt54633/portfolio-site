import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Nav from "../components/nav";
import Form from "../components/form";
import DocumentComponent from "../components/document";
import { useEffect, useRef } from "react";

const PdfBuilder = () => {
  const [formData, setFormData] = useState({ title: "Summer Camp 2024" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const documentRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (documentRef.current) {
        const minWidth = 750;
        const container = documentRef.current.parentElement;
        const computedStyle = getComputedStyle(container);
        const paddingMargin =
          parseFloat(computedStyle.paddingLeft) +
          parseFloat(computedStyle.paddingRight) +
          parseFloat(computedStyle.marginLeft) +
          parseFloat(computedStyle.marginRight);
        const viewportWidth = window.innerWidth - paddingMargin;
        const scaleFactor = Math.max(0.4, (viewportWidth / minWidth) * 0.98);
        const scale = Math.min(1, scaleFactor * (viewportWidth / window.innerWidth));
        documentRef.current.style.transform = `scale(${scale})`;
        documentRef.current.style.transformOrigin = "top";
        documentRef.current.style.height = `${documentRef.current.scrollHeight * scale}px`;

        container.style.display = "flex";
        container.style.justifyContent = "center";
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hiddenElement = document.getElementById("document-component");
    if (!hiddenElement) {
      console.error('Element with ID "document-component" not found.');
      return;
    }
    setIsLoading(true);
    try {
      hiddenElement.style.display = "block";
      hiddenElement.style.position = "absolute";
      hiddenElement.style.left = "-9999px";

      const a4WidthPx = 1000;
      const a4HeightPx = 1430;
      hiddenElement.style.width = `${a4WidthPx}px`;
      hiddenElement.style.height = `${a4HeightPx}px`;

      const canvas = await html2canvas(hiddenElement);
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: "a4"
      });
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgProps = pdf.getImageProperties(imgData);
      const imgWidth = imgProps.width;
      const imgHeight = imgProps.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const scaledWidth = imgWidth * ratio;
      const scaledHeight = imgHeight * ratio;
      const padding = 10;

      const xOffset = (pdfWidth - scaledWidth) / 2 + padding;
      const yOffset = (pdfHeight - scaledHeight) / 2 + padding;
      const paddedWidth = scaledWidth - 2 * padding;
      const paddedHeight = scaledHeight - 2 * padding;

      pdf.addImage(imgData, "PNG", xOffset, yOffset, paddedWidth, paddedHeight);
      pdf.save(`${formData.title}.pdf`);

      hiddenElement.style.display = "none";
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center overflow-hidden">
      <Nav />
      <div
        className="flex flex-col gap-8 p-5 lg:flex-row lg:gap-7"
        style={{ width: "min(100%, 1400px)" }}>
        <div className="flex w-full flex-col gap-4 lg:w-1/4">
          <Form formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />

          <button
            type="button"
            onClick={handleSubmit}
            disabled={isLoading}
            className={`bg-scout-purple hover:bg-scout-purple-hover w-full rounded-lg px-2 py-2.5 font-bold text-white transition-all duration-200 disabled:bg-black`}>
            {isLoading ? "Generating PDF" : "Download PDF"}
          </button>
        </div>
        <div className="flex w-full flex-col gap-4 overflow-x-auto rounded-lg bg-gray-100 py-2 lg:w-3/4">
          <h1 className="border-b-2 px-4 pb-1 font-bold">Document Preview</h1>

          <div className="w-full overflow-x-auto px-4 pb-2.5">
            <div className="min-w-[750px] lg:w-full lg:min-w-0" ref={documentRef}>
              <div className="rounded-lg border-2 border-gray-400">
                <DocumentComponent formData={formData} />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ minWidth: "750px" }}
          className="hidden overflow-x-auto"
          id="document-component">
          <DocumentComponent formData={formData} />
        </div>
      </div>
    </div>
  );
};

export default PdfBuilder;
