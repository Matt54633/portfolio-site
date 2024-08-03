

import PropTypes from 'prop-types';

const Form = ({ formData = { title: '', startDate: '', endDate: '' }, handleChange, handleSubmit }) => {
    return (
        <div className="flex flex-col gap-2.5 ">
            <h1 className="font-bold border-b-2 pb-1 text-lg">Form Details</h1>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <label>
                    Title
                    <input
                        type="text"
                        name="title"
                        placeholder="Risk Assessment"
                        value={formData.title}
                        onChange={handleChange}
                        className="mt-1 w-full rounded-lg p-2 border-2 transition-all hover:border-scout-purple"
                    />
                </label>

                {/* <label>
                    Start Date
                    <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        className="mt-1 w-full rounded-lg p-2 border-2 transition-all hover:border-scout-purple"
                    />
                </label>

                <label>
                    End Date
                    <input
                        type="date"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                        className="mt-1 w-full rounded-lg p-2 border-2 transition-all hover:border-scout-purple"
                    />
                </label> */}

            </form>
        </div>
    );
};

Form.propTypes = {
    formData: PropTypes.shape({
        title: PropTypes.string,
        startDate: PropTypes.string,
        endDate: PropTypes.string,
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};

export default Form;
