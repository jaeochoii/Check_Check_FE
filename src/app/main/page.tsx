"use client";

import * as React from "react";
import { useState } from "react";
import { MainLay } from "./style";
import { LeftBarPage } from "../components/Main/LeftBar";
import { RightBarPage } from "../components/Main/RightBar";
import { ContentsPage } from "../components/Main/Contents";
import { Question, Company } from "../components/Main/type";

interface MainPageProps {
  selectedCompany: Company | null;
  selectedQuestion: Question | null;
}

export default function MainPage(): React.JSX.Element {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(
    null
  );

  const handleQuestionClick = (company: Company, question: Question) => {
    setSelectedCompany(company);
    setSelectedQuestion(question);
  };

  const handleDeleteCompany = (companyId: number) => {
    if (selectedCompany && selectedCompany.id === companyId) {
      setSelectedCompany(null);
      setSelectedQuestion(null);
    }
  };

  return (
    <MainLay>
      <LeftBarPage
        onQuestionClick={handleQuestionClick}
        onDeleteCompany={handleDeleteCompany}
      />
      <ContentsPage
        selectedCompany={selectedCompany}
        selectedQuestion={selectedQuestion}
      />
      <RightBarPage selectedCompany={selectedCompany} />
    </MainLay>
  );
}
