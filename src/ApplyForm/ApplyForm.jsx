import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2'


const ApplyForm = () => {
    const title = useParams();

    const [candidateName, setCandidateName] = useState('');
    const [candidateEmail, setCandidateEmail] = useState('');
    const [candidateResume, setCandidateResume] = useState(null);

    const handleNameChange = (e) => {
        setCandidateName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setCandidateEmail(e.target.value);
    };

    const handleResumeChange = (e) => {
        const selectedFile = e.target.files[0];
        setCandidateResume(selectedFile);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const formData = new FormData();
        formData.append('jobTitle', title?.jobtitle);
        formData.append('candidateName', candidateName);
        formData.append('candidateEmail', candidateEmail);
        formData.append('candidateResume', candidateResume);

        // Display success message using Swal or any other method
        Swal.fire(
            'Good job!',
            'Apply Successfully Done!',
            'success'
        );

        // Reset the form
        form.reset();
        setCandidateName('')
        setCandidateEmail('')
    }


    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg lg:mt-20 border">
            <form id="application-form" onSubmit={handleSubmit}>
                <h3 className="text-xl font-semibold mb-4">
                    Apply for the {title?.jobtitle} job
                </h3>
                <div className="mb-4">
                    <label htmlFor="candidate-name" className="block text-sm font-medium text-gray-700">
                        Your Name:
                    </label>
                    <input
                        type="text"
                        id="candidate-name"
                        value={candidateName}
                        onChange={handleNameChange}
                        required
                        className="mt-1 p-2 block w-full border rounded-md bg-gray-100 focus:ring focus:ring-blue-200"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="candidate-email" className="block text-sm font-medium text-gray-700">
                        Your Email:
                    </label>
                    <input
                        type="email"
                        id="candidate-email"
                        value={candidateEmail}
                        onChange={handleEmailChange}
                        required
                        className="mt-1 p-2 block w-full border rounded-md bg-gray-100 focus:ring focus:ring-blue-200"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="candidate-resume" className="block text-sm font-medium text-gray-700">
                        Upload Resume:
                    </label>
                    <input
                        type="file"
                        id="candidate-resume"
                        accept=".pdf,.doc,.docx"
                        onChange={handleResumeChange}
                        required
                        className="mt-1 p-2 block w-full border rounded-md bg-gray-100 focus:ring focus:ring-blue-200"
                    />
                </div>
                <div className="mt-6">
                    <button
                        type="submit"
                        className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md shadow-md"
                    >
                        Submit Application
                    </button>
                </div>
            </form>
        </div>

    );
};

export default ApplyForm;