import { Navigate, Route, Routes } from "react-router-dom";

import { AppShell } from "@/app/AppShell";
import { PRIVACY_POLICY, TERMS_OF_SERVICE } from "@/data/legal";
import { AboutPage } from "@/pages/AboutPage";
import { ContactPage } from "@/pages/ContactPage";
import { DesignsPage } from "@/pages/DesignsPage";
import { HomePage } from "@/pages/HomePage";
import { LegalPage } from "@/pages/LegalPage";
import { ProjectsPage } from "@/pages/ProjectsPage";
import { SkillsPage } from "@/pages/SkillsPage";

export function AppRouter() {
  return (
    <Routes>
      <Route element={<AppShell />}>
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
  );
}
