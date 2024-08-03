import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Nav from "../components/nav";
import Form from "../components/form";
import DocumentComponent from "../components/document";

const PdfBuilder = () => {
    const [formData, setFormData] = useState({ title: "Summer Camp 2024" });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const input = document.getElementById("document-component");
        if (!input) {
            console.error('Element with ID "document-component" not found.');
            return;
        }
        setIsLoading(true);
        try {
            // Store the original dimensions
            const originalWidth = input.style.width;
            const originalHeight = input.style.height;

            const a4WidthPx = 1000;
            const a4HeightPx = 1430;
            input.style.width = `${a4WidthPx}px`;
            input.style.height = `${a4HeightPx}px`;

            const canvas = await html2canvas(input);
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF({
                orientation: "portrait",
                unit: "px",
                format: "a4",
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

            pdf.addImage(imgData, 'PNG', xOffset, yOffset, paddedWidth, paddedHeight);
            pdf.save(`${formData.title}.pdf`);
            // Restore the original dimensions
            input.style.width = originalWidth;
            input.style.height = originalHeight;
        } catch (error) {
            console.error("Error generating PDF:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (

        <div className="overflow-hidden">
            <Nav />
            <div className="flex flex-col gap-8 p-5 lg:flex-row lg:gap-10">
                <div className="flex w-full flex-col gap-3 lg:w-1/4">
                    <Form
                        formData={formData}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    />

                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="hover:bg-scout-purple-hover mt-1 w-full rounded-lg bg-scout-purple px-2 py-3 font-bold text-white transition-colors"
                    >
                        Download PDF
                    </button>
                </div>
                <div className="flex w-full   flex-col gap-4 lg:w-3/4">
                    <h1 className="border-b-2 pb-1 text-lg font-bold">
                        Document Preview
                    </h1>

                    <div className="overflow-x-auto">

                    {isLoading ? (
                        <div className="bg-[rgb(229,231,235)] p-10 rounded-lg text-center ">
                            <p className="text-2xl font-bold">Generating PDF</p>
                            </div>
                    ) : (
                        
                        <div className="ring-1 min-w-[700px] ring-inset ring-black">
                        <div id="document-component">
                            <DocumentComponent formData={formData} />
                        </div>

                    </div>
                    )}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default PdfBuilder
