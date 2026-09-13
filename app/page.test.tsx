import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Recreated Paragon Global Internships Page with Complete Brand Layout, Testimonials and Footer", () => {
  it("renders the top Erasmus+ announcement banner linking to Contact Us", () => {
    render(<Home />);

    const bannerText = screen.getByText(/Erasmus\+ Work Placement & Staff Mobility funding is now active/i);
    expect(bannerText).toBeInTheDocument();

    const bannerLink = screen.getByRole("link", { name: /here/i });
    expect(bannerLink).toBeInTheDocument();
    expect(bannerLink).toHaveAttribute("href", "#contact-us");
  });

  it("renders the floating navbar with custom cropped logo and exact menus", () => {
    render(<Home />);

    // Check brand logo is rendered with the cropped logo asset
    const logo = screen.getByAltText("Paragon Global Internships");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "/cropped-Paragon-re-logo.png");

    // Check exact navbar navigation links requested by user are present
    expect(screen.getAllByText("About")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Sectors")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Programs")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Testimonials")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Mentors")[0]).toBeInTheDocument();
  });

  it("renders action buttons: Log in and Apply Now linking to Contact Us", () => {
    render(<Home />);

    const loginLink = screen.getAllByRole("link", { name: /log in/i })[0];
    expect(loginLink).toBeInTheDocument();
    expect(loginLink).toHaveAttribute("href", "#login");

    const applyNowLink = screen.getAllByRole("link", { name: /apply now/i })[0];
    expect(applyNowLink).toBeInTheDocument();
    expect(applyNowLink).toHaveAttribute("href", "#contact-us");
  });

  it("renders the hero content and description correctly", () => {
    render(<Home />);

    // Check hero title text parts
    expect(screen.getByText(/Launch Your Career With/i)).toBeInTheDocument();
    expect(screen.getByText("International Experience")).toBeInTheDocument();

    // Check hero description text
    expect(
      screen.getByText(/Gain real world experience, build valuable skills/i)
    ).toBeInTheDocument();

    // Check members subtext
    expect(screen.getByText(/Join 35,000\+ students and professionals worldwide/i)).toBeInTheDocument();

    // Check Excellence rating pill
    expect(screen.getByText(/20\+ Years of Excellence in Student Mobility/i)).toBeInTheDocument();
  });

  it("renders the As Seen On media-feature section with infinite marquee track", () => {
    const { container } = render(<Home />);

    // Check section label is present with new PGI branding
    const label = screen.getByText("TRUSTED BY OVER 400 HIGHER EDUCATION INSTITUTIONS AND 4,000 GLOBAL PARTNERS:");
    expect(label).toBeInTheDocument();

    // Check that there are two duplicate logo images inside the marquee
    const marqueeImages = container.querySelectorAll(".sp-img");
    expect(marqueeImages.length).toBeGreaterThanOrEqual(2);
    expect(marqueeImages[0]).toHaveAttribute("src", "/attached_assets/logo@3x.png");
  });

  it("renders the Statistics outcomes section with loop progress bars", () => {
    render(<Home />);

    // Check statistics section header
    expect(
      screen.getByText("Here is What Students and Universities Report After Partnering with Us")
    ).toBeInTheDocument();

    // Check specific progress bar labels
    expect(
      screen.getByText("I feel more confident in my professional and global capabilities")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Our university partners report exceptional student placement satisfaction")
    ).toBeInTheDocument();
    expect(
      screen.getByText("I feel fully prepared to launch my international career")
    ).toBeInTheDocument();

    // Check stats footer
    expect(screen.getByText("Professional. Secure. Inspiring.")).toBeInTheDocument();
  });

  it("renders the Social Proof infinite testimonials marquee track", () => {
    render(<Home />);

    // Check header elements
    expect(screen.getByText("Real People. Real Results.")).toBeInTheDocument();
    expect(
      screen.getByText(/Real stories from students and professionals who advanced their careers/i)
    ).toBeInTheDocument();

    // Check specific testimonial handles (at least twice due to loop duplication)
    const yinkaHandles = screen.getAllByText("Yinka E.");
    expect(yinkaHandles.length).toBeGreaterThanOrEqual(2);
    expect(yinkaHandles[0]).toBeInTheDocument();

    const tarekHandles = screen.getAllByText("Tarek S.");
    expect(tarekHandles.length).toBeGreaterThanOrEqual(2);
    expect(tarekHandles[0]).toBeInTheDocument();

    // Check interactive watch badges
    const watchBadges = screen.getAllByText("Watch");
    expect(watchBadges.length).toBeGreaterThanOrEqual(42); // 21 items * 2 duplicates
  });

  it("renders the brand Footer section with custom columns and copyright details", () => {
    render(<Home />);

    // Check grand hero logo brand text
    expect(screen.getByText("PARAGON")).toBeInTheDocument();

    // Check footer columns titles
    expect(screen.getByText("Our Programs")).toBeInTheDocument();
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("Company")).toBeInTheDocument(); // Paragon's Company footer title is unique again

    // Check brand description copy
    expect(
      screen.getByText(/Empowering students, graduates, and professionals worldwide to unlock their potential/i)
    ).toBeInTheDocument();

    // Check copyright
    expect(
      screen.getByText(/© 2026 Paragon Global Internships. All rights reserved./i)
    ).toBeInTheDocument();

    // Check legal links
    expect(screen.getByText("Privacy Policy")).toBeInTheDocument();
    expect(screen.getByText("Terms of Service")).toBeInTheDocument();
  });

  it("renders the NeuroGym ke3l CTA section before the footer", () => {
    render(<Home />);

    // Check CTA section title with nested gradient text
    expect(screen.getByRole("heading", { name: /Your Time Is Now/i })).toBeInTheDocument();

    // Check CTA description
    expect(
      screen.getByText("This is your moment to train your brain and create a life that matches what you're capable of.")
    ).toBeInTheDocument();

    // Check CTA button (index 6 is the last Get Started button in DOM order)
    const getStartedBtn = screen.getAllByRole("link", { name: /Get Started/i })[6];
    expect(getStartedBtn).toBeInTheDocument();
    expect(getStartedBtn).toHaveAttribute("href", "https://www.myneurogym.com/neurofitness-assessment");
  });

  it("renders the Paragon Frequently Asked Questions (FAQ) section", () => {
    render(<Home />);

    // Check FAQ section title and subtitle
    expect(screen.getByRole("heading", { name: /Frequently Asked Questions About Paragon Global Internships/i })).toBeInTheDocument();
    expect(
      screen.getByText("Clear answers about Paragon Global Internships, work placements, student accommodation, and programs in Malta.")
    ).toBeInTheDocument();

    // Check some specific questions and answers
    expect(screen.getByRole("heading", { name: "What is Paragon Global Internships?" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "What services does PGI provide?" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Does PGI offer paid internships?" })).toBeInTheDocument();

    expect(
      screen.getByText(/Paragon Global Internships \(PGI\) is a Malta-based international mobility/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/We offer end-to-end support including tailormade internship placements/i)
    ).toBeInTheDocument();
  });

  it("renders the Paragon Programmes Gallery section", () => {
    render(<Home />);

    // Check gallery section title and description
    expect(screen.getByRole("heading", { name: /Preview Our Programmes/i })).toBeInTheDocument();
    expect(
      screen.getByText("Gain hands-on professional experience, premium shared living, and rich cultural immersion in Malta. Choose your pathway to global career success.")
    ).toBeInTheDocument();

    // Check gallery item labels and text
    expect(screen.getByText("International Internships")).toBeInTheDocument();
    expect(screen.getByText("Premium Accommodation")).toBeInTheDocument();
    expect(screen.getByText("Staff Mobility & Job Shadowing")).toBeInTheDocument();

    // Check resource links
    expect(screen.getByText("Explore Work Placements")).toBeInTheDocument();
    expect(screen.getByText("Explore Accommodations")).toBeInTheDocument();
    expect(screen.getByText("Explore Staff Mobility")).toBeInTheDocument();

    // Check gallery section CTA button
    const getStartedBtn = screen.getAllByRole("link", { name: /Get Started/i })[5];
    expect(getStartedBtn).toBeInTheDocument();
    expect(getStartedBtn).toHaveAttribute("href", "#contact-us");
  });

  it("renders the Paragon kp49 Placement Sectors section", () => {
    render(<Home />);

    // Check section heading and description
    expect(screen.getByText("15+")).toBeInTheDocument();
    expect(screen.getByText("Placement Sectors")).toBeInTheDocument();
    expect(
      screen.getByText("Hands-on corporate placements matched precisely to your academic background, career interests, and skills across Malta's fastest-growing industries.")
    ).toBeInTheDocument();

    // Check specific sectors
    expect(screen.getAllByText("Business Admin")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Business, Management & HR")[0]).toBeInTheDocument();

    expect(screen.getAllByText("Information Tech")[0]).toBeInTheDocument();
    expect(screen.getAllByText("IT & Software Engineering")[0]).toBeInTheDocument();

    expect(screen.getAllByText("Finance")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Finance, Banking & Advisory")[0]).toBeInTheDocument();

    // Check Get Started CTA button (index 4 in the DOM order)
    const getStartedBtn = screen.getAllByRole("link", { name: /Get Started/i })[4];
    expect(getStartedBtn).toBeInTheDocument();
    expect(getStartedBtn).toHaveAttribute("href", "#contact-us");
  });

  it("renders the Paragon k2sc About Us section", () => {
    render(<Home />);

    // Check heading label and title
    expect(screen.getByText("ABOUT US")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Empowering Careers Through/i })
    ).toBeInTheDocument();

    // Check stats row numbers
    expect(screen.getByText("20+")).toBeInTheDocument();
    expect(screen.getByText("400+")).toBeInTheDocument();
    expect(screen.getByText("35,000+")).toBeInTheDocument();
    expect(screen.getByText("4,000+")).toBeInTheDocument();

    // Check video container exists
    expect(screen.getByLabelText("Play video")).toBeInTheDocument();
    
    // Check specific benefit cards
    expect(screen.getByText("Extensive Placement Experience")).toBeInTheDocument();
    expect(screen.getByText("Quality Student Housing")).toBeInTheDocument();
    expect(screen.getByText("Continuous Placement Mentoring")).toBeInTheDocument();
    expect(screen.getByText("Expert Advisory Staff")).toBeInTheDocument();
    expect(screen.getByText("Bespoke Training & Tuition")).toBeInTheDocument();
    expect(screen.getByText("Cultural & Social Programmes")).toBeInTheDocument();

    // Check CTA button (index 0 in the DOM order)
    const getStartedBtn = screen.getAllByRole("link", { name: /Get Started/i })[0];
    expect(getStartedBtn).toBeInTheDocument();
    expect(getStartedBtn).toHaveAttribute("href", "#contact-us");
  });

  it("renders the NeuroGym j9la How It Works section", () => {
    render(<Home />);

    // Check heading labels and titles
    expect(screen.getAllByText("How It Works")[0]).toBeInTheDocument();
    expect(screen.getByText("Step-by-Step to Global Success")).toBeInTheDocument();
    expect(screen.getByText("Your simple three-step journey to a premium international work placement in Malta.")).toBeInTheDocument();

    // Check step items
    expect(screen.getByText("Submit Your Application")).toBeInTheDocument();
    expect(screen.getByText("Confirm Your Placement & Accommodation")).toBeInTheDocument();
    expect(screen.getByText("Arrive & Thrive in Malta")).toBeInTheDocument();

    // Check CTA button (index 1 in the DOM order)
    const getStartedBtn = screen.getAllByRole("link", { name: /Get Started/i })[1];
    expect(getStartedBtn).toBeInTheDocument();
    expect(getStartedBtn).toHaveAttribute("href", "#contact-us");
  });

  it("renders the Paragon q3qi Success Stories section", () => {
    render(<Home />);

    // Check heading labels and titles
    expect(screen.getAllByText("SUCCESS STORIES")[0]).toBeInTheDocument();
    expect(screen.getByText("Shatter Limitations & Transform Your Career")).toBeInTheDocument();
    expect(screen.getByText("What happens when universities, students, and coordinators partner with Paragon Global Internships")).toBeInTheDocument();

    // Check specific testimonials
    expect(screen.getByText("Kathrin R.")).toBeInTheDocument();
    expect(screen.getByText("Erasmus+ Business Intern from Germany")).toBeInTheDocument();

    expect(screen.getByText("Stefan E.")).toBeInTheDocument();
    expect(screen.getByText("IT & Software Engineering Intern from Austria")).toBeInTheDocument();

    expect(screen.getByText("Fiona M.")).toBeInTheDocument();
    expect(screen.getByText("Staff Mobility Participant from Ireland")).toBeInTheDocument();

    expect(screen.getByText("Gianluca L.")).toBeInTheDocument();
    expect(screen.getByText("Erasmus+ Coordinator from Italy")).toBeInTheDocument();

    expect(screen.getByText("Nathan M.")).toBeInTheDocument();
    expect(screen.getByText("Host Company HR Director, Malta Tech Solutions")).toBeInTheDocument();

    expect(screen.getByText("Billie J.")).toBeInTheDocument();
    expect(screen.getByText("Finance & Banking Intern from Spain")).toBeInTheDocument();

    expect(screen.getByText("Jonathan & Clara K.")).toBeInTheDocument();
    expect(screen.getByText("Adult Education Participants from Denmark")).toBeInTheDocument();

    // Check CTA button (index 2 in the DOM order)
    const getStartedBtn = screen.getAllByRole("link", { name: /Get Started/i })[2];
    expect(getStartedBtn).toBeInTheDocument();
    expect(getStartedBtn).toHaveAttribute("href", "#contact-us");
  });

  it("renders the Paragon s0vi Team and Advisory Board section", () => {
    render(<Home />);

    // Check heading labels and titles
    expect(screen.getAllByText("Your Mentors")[0]).toBeInTheDocument();
    expect(screen.getAllByText("World-Class Experts")[0]).toBeInTheDocument();
    expect(screen.getByText("Learn from the best minds in international education, placement mentoring, and professional training in Malta")).toBeInTheDocument();

    // Check specific expert members
    expect(screen.getAllByText("Dr. Maria Borg")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Head of Corporate Placements")[0]).toBeInTheDocument();

    expect(screen.getAllByText("John Attard")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Professional Development Coach")[0]).toBeInTheDocument();

    expect(screen.getAllByText("Dr. Antoinette Caruana")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Enterprise Relations Lead")[0]).toBeInTheDocument();

    expect(screen.getAllByText("Prof. Saviour Aquilina")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Academic Training Specialist")[0]).toBeInTheDocument();

    expect(screen.getAllByText("Rebecca Debono")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Adult Education Coordinator")[0]).toBeInTheDocument();

    expect(screen.getAllByText("Matthew Scicluna")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Technical Placement Coordinator")[0]).toBeInTheDocument();

    // Check CTA button (index 3 in the DOM order)
    const getStartedBtn = screen.getAllByRole("link", { name: /Get Started/i })[3];
    expect(getStartedBtn).toBeInTheDocument();
    expect(getStartedBtn).toHaveAttribute("href", "#contact-us");
  });
});








