import React, { useState } from "react";

const Dashboard = () => {
  // States for form input fields
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [questions, setQuestions] = useState(["", "", ""]);
  const [answers, setAnswers] = useState(["", "", ""]);
  const [emails, setEmails] = useState([""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle submit form data
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simulating email sending and job listing creation
    try {
      const jobDetails = {
        companyName,
        jobTitle,
        questions,
        answers,
        emails,
      };

      // Simulate job listing creation and email sending
      console.log("Job Listing Created: ", jobDetails);
      alert(
        `Job listing created successfully!\nEmails sent to: ${emails.join(
          ", "
        )}`
      );

      // Reset form fields after submission
      //setCompanyName("");
      //setJobTitle("");
      //setQuestions(["", "", ""]);
      //setAnswers(["", "", ""]);
      setEmails([""]);
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Handle email change
  const handleEmailChange = (index, value) => {
    const newEmails = [...emails];
    newEmails[index] = value;
    setEmails(newEmails);
  };

  // Handle question change
  const handleQuestionChange = (index, value) => {
    const newQuestions = [...questions];
    newQuestions[index] = value;
    setQuestions(newQuestions);
  };

  // Handle answer change
  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  return (
    <div>
      <h1>Create Job Listing</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Company Name:</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Job Title:</label>
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
          />
        </div>

        {/* Questions */}
        {questions.map((question, index) => (
          <div key={index}>
            <label>Question {index + 1}:</label>
            <input
              type="text"
              value={question}
              onChange={(e) => handleQuestionChange(index, e.target.value)}
              required
            />
            <label>Good Answer:</label>
            <input
              type="text"
              value={answers[index]}
              onChange={(e) => handleAnswerChange(index, e.target.value)}
              required
            />
          </div>
        ))}

        {/* Emails */}
        <div>
          <label>Emails:</label>
          {emails.map((email, index) => (
            <div key={index}>
              <input
                type="email"
                value={email}
                onChange={(e) => handleEmailChange(index, e.target.value)}
                required
              />
            </div>
          ))}
          <button type="button" onClick={() => setEmails([...emails, ""])}>
            Add Email
          </button>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Creating Job Listing..." : "Create Job Listing"}
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

export default Dashboard;
