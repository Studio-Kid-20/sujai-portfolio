import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { MainLayout } from "@/components/layout/MainLayout";
import { AboutPage } from "@/pages/AboutPage";
import { ContactPage } from "@/pages/ContactPage";
import { DesignsPage } from "@/pages/DesignsPage";
import { HomePage } from "@/pages/HomePage";
import { LegalPage } from "@/pages/LegalPage";
import { ProjectsPage } from "@/pages/ProjectsPage";
import { SkillsPage } from "@/pages/SkillsPage";
import { PRIVACY_POLICY, TERMS_OF_SERVICE } from "@/content/legal";

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
                {PRIVACY_POLICY.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </LegalPage>
            }
          />
          <Route
            path="terms"
            element={
              <LegalPage title="Terms of Service">
                {TERMS_OF_SERVICE.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </LegalPage>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
