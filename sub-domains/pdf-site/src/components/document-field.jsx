import PropTypes from 'prop-types';

const DocumentField = ({ label, widthClass }) => {
	return (
		<div className={`flex flex-col gap-2.5 ${widthClass}`}>
			<p className="font-bold">{label}</p>
			<div className="border-2 border-black p-4">
				
			</div>
		</div>
	);
};

DocumentField.propTypes = {
	label: PropTypes.string.isRequired,
	widthClass: PropTypes.string.isRequired,
};

export default DocumentField;