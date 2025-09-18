const questions = [
    { id: 1, text: "Technician Name", type: "text" },
    { id: 2, text: "Date of Teardown", type: "date" },
    { id: 3, text: "Model Name / Number", type: "text" },
    {
      id: 4,
      text: "Is the fan functional before teardown?",
      type: "radio",
      options: ["Yes", "No"],
    },
    { id: 5, text: "Upload a picture of the complete tower fan before teardown", type: "image" },
    { id: 6, text: "Upload a picture before removing the front grill", type: "image" },
    { id: 7, text: "Upload a picture after removing the front grill", type: "image" },
    {
      id: 8,
      text: "What type of fasteners were used to attach the front grill?",
      type: "checkbox",
      options: ["Screws", "Clips", "No fasteners"],
      other: true,
    },
    { id: 9, text: "Upload a picture before removing the fan blades", type: "image" },
    { id: 10, text: "Upload a picture after removing the fan blades", type: "image" },
    {
      id: 11,
      text: "Were the fan blades dusty or damaged?",
      type: "radio",
      options: ["Yes", "No"],
    },
    { id: 12, text: "Briefly describe the damage or condition", type: "text", optional: true },
    { id: 13, text: "Upload a picture before removing the motor assembly", type: "image" },
    { id: 14, text: "Upload a picture after removing the motor assembly", type: "image" },
    { id: 15, text: "Are there any visible labels or part numbers on the motor?", type: "text", optional: true },
    { id: 16, text: "Upload a picture showing the fully disassembled fan (internal view)", type: "image" },
    { id: 17, text: "Upload a picture showing all removed parts laid out", type: "image" },
    { id: 18, text: "Any challenges faced during the teardown?", type: "textarea" },
    {
      id: 19,
      text: "Were any parts missing, stripped, or broken?",
      type: "radio",
      options: ["Yes", "No"],
    },
    { id: 20, text: "Final comments or observations", type: "textarea" },
  ];
  
  export default questions;
  