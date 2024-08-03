import PropTypes from "prop-types";

const DocumentGroupField = ({ label, widthClass, items = ['', '', '', '', ''] }) => {
    return (
        <div className={`flex flex-col gap-2.5 ${widthClass}`}>
            <label className=" font-bold">{label}</label>
            <div className="border-2 border-black p-4 gap-3 flex flex-col">
                {items.map((item, index) => (
                    <p key={index} className={`border-b-[2px] pb-2.5 border-dashed ${index === 0 ? 'mt-0.5' : ''}`}>
                        {item || <span className="text-transparent">Placeholder</span>}
                    </p>
                ))}
            </div>
        </div>
    );
};

DocumentGroupField.propTypes = {
    label: PropTypes.string.isRequired,
    widthClass: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string),
};

export default DocumentGroupField;
