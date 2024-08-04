import PropTypes from "prop-types"
import DocumentField from "./document-field"
import DocumentGroupField from "./document-group-field"

const DocumentComponent = ({ formData = { title: "", startDate: "", endDate: "" } }) => {
    const title = formData.title || "No Title Chosen";

    
    return (
        <div className="flex w-full  flex-col gap-4 bg-white rounded-lg  border-gray-400">
           
            <div className="flex flex-col gap-4 p-4">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                        <h2 className="text-2xl font-semibold">
                            {title}
                        </h2>
                        <h1 className="text-3xl font-bold">
                            Young Person Health Form
                        </h1>
                    </div>

                    <img
                        src="scout-logo-black.png"
                        className="h-16"
                    ></img>
                </div>

                <div className="flex flex-col gap-3">
                    <p>
                        Please complete in <b>BLOCK CAPITALS</b>
                    </p>

                    <div className="flex gap-4">
                        <DocumentField label="Surname" widthClass="w-2/3" />
                        <DocumentField
                            label="Date of Birth"
                            widthClass="w-1/3"
                        />
                    </div>
                    <div className="flex gap-4">
                        <DocumentField label="Forenames" widthClass="w-2/3" />
                        <DocumentField label="Postcode" widthClass="w-1/3" />
                    </div>
                    <div className="flex gap-4">
                        <div className="flex w-2/3 gap-4">
                        <DocumentField label="NHS Number" widthClass="w-1/2" />
                        <DocumentField label="Scout Group" widthClass="w-1/2" />

                        </div>
                        <DocumentField
                            label="Date of Last Tetnus Injection"
                            widthClass="w-1/3"
                        />
                    </div>
                </div>

                <div className="flex gap-4">
                    <DocumentGroupField label="Home Address of Young Person" widthClass="w-1/2" />
                    <DocumentGroupField label="Doctors Surgery and Address" widthClass="w-1/2" items={["", "", "", "Doctors Name:", "Telephone:"]} />
                </div>

                <div className="flex gap-4">
                    <DocumentGroupField label="Emergency Contact 1: Name and Address" widthClass="w-1/2" items={["", "", "Mobile Phone:", "Alternative Number:", "Relationship to child:"]} />
                    <DocumentGroupField label="Emergency Contact 2: Name and Address" widthClass="w-1/2" items={["", "", "Mobile Phone:", "Alternative Number:", "Relationship to child:"]} />
                </div>

                <div>
                    <p className="font-bold">EMERGENCY PERMISSION</p>
                    <div className="flex flex-col gap-2">

                    <p>
                        I understand that in the event of my child requiring
                        medical attention all reasonable efforts will be made to
                        contact me (or the Alternative Emergency Contact if I am
                        uncontactable) using the contact numbers provided on the
                        health form.
                        </p>
                        <p>
                        If it becomes necessary for my child to receive medical
                        treatment and I cannot be contacted to authorise this, I
                        hereby give my general consent to any necessary medical
                        treatment, and authorise the Leader in charge to sign
                        any document required by the hospital authorities.

                        </p>
                        <p>
                        I will inform the Leaders if my son / daughter
                        has been in contact with any infectious diseases within
                        3 weeks ahead of an event (e.g. Chicken Pox, Measles,
                        Mumps, Rubella, Whooping Cough, Diphtheria, etc)
                    </p>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <div className="flex gap-4">
                        <DocumentField
                            label="Name of Parent/Guardian"
                            widthClass="w-2/3"
                        />
                        <DocumentField
                            label="Relationship to Young Person"
                            widthClass="w-1/3"
                        />
                    </div>
                    <div className="flex gap-4">
                        <DocumentField label="Signature" widthClass="w-2/3" />
                        <DocumentField label="Date" widthClass="w-1/3" />
                    </div>
                </div>
            </div>
        </div>
    )
}

DocumentComponent.propTypes = {
    formData: PropTypes.shape({
        title: PropTypes.string,
        startDate: PropTypes.string,
        endDate: PropTypes.string,
    }).isRequired,
}

export default DocumentComponent
