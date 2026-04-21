import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { MainLayout } from "@/components/layout/MainLayout";
import { AboutPage } from "@/pages/AboutPage";
import { ContactPage } from "@/pages/ContactPage";
import { DesignsPage } from "@/pages/DesignsPage";
import { HomePage } from "@/pages/HomePage";
import { LegalPage } from "@/pages/LegalPage";
import { ProjectsPage } from "@/pages/ProjectsPage";
import { SkillsPage } from "@/pages/SkillsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="skills" element={<SkillsPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="designs" element={<DesignsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route
            path="privacy"
            element={
              <LegalPage title="Privacy Policy">
                <p>
                  This portfolio only collects the information you choose to send through the contact form, such as
                  your name, email address, subject, and message.
                </p>
                <p>
                  If a contact backend is configured, that data is used only to review your inquiry and reply to you.
                  I do not intentionally collect sensitive personal information through this site.
                </p>
                <p>
                  Your hosting provider may still collect standard technical logs such as IP address, browser type, or
                  request timing for security and performance reasons. If you want your submitted message removed,
                  contact me directly by email.
                </p>
              </LegalPage>
            }
          />
          <Route
            path="terms"
            element={
              <LegalPage title="Terms of Service">
                <p>
                  The work displayed on this site is presented to showcase my skills, experiments, and shipped
                  projects. Unless otherwise noted, the design, writing, and code samples remain my original work.
                </p>
                <p>
                  You are welcome to view and reference the portfolio for inspiration or evaluation, but you should not
                  republish, resell, or claim this work as your own without permission.
                </p>
                <p>
                  I may update or remove content at any time as the portfolio evolves. If you want to discuss a
                  project, collaboration, or permission request, please reach out through the contact page or email.
                </p>
              </LegalPage>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
