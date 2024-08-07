

import PropTypes from 'prop-types';

const Form = ({ formData = { title: '', startDate: '', endDate: '' }, handleChange, handleSubmit }) => {
    return (
        <div className="flex flex-col gap-2.5 bg-gray-100 py-2 rounded-lg ">
            <h1 className="font-bold border-b-[3px]  px-4 pb-1.5 text-lg font-[Nunito]">Form Details</h1>
            <form className="flex flex-col gap-4 px-3.5 py-1.5" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full  rounded-lg p-2.5 border-[3px] border-gray-200  transition-all hover:border-scout-purple"
                    />

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
