/**
 * Interface defining the structure of the CV content.
 * This structure helps in organizing AI-generated text and 
 * displaying it consistently across the portfolio.
 */
export interface CVData {
    summary: string;
    experience: string;
    skills: string[];
    lastUpdated: string;
  }
  
  /**
   * Main CV content object.
   * To update your portfolio: 
   * 1. Generate content using the AI CV Generator page.
   * 2. Copy the results.
   * 3. Paste them into the 'summary' and 'experience' fields below.
   */
  export const myCVContent: CVData = {
    // Add your professional summary here
    summary: "", 
  
    // Add your detailed experience bullet points here
    experience: "", 
  
    // List your core technologies
    skills: [
      "React", 
      "TypeScript", 
      "JavaScript", 
      "Ant Design", 
      "Axios", 
      "Vite", 
      "Gemini API"
    ],
  
    // Set the current date or your last update date
    lastUpdated: "2026-04-26"
  };