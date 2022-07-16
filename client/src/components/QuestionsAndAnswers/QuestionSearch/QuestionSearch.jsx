import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../../contexts/GlobalStore';

function QuestionSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const { questions, setFilteredQuestions, numQuestions } = useGlobalContext();

  useEffect(() => {
    if (searchTerm.length >= 3) {
      const filtered = [];
      Object.values(questions).forEach((question) => {
        if (question.question_body.includes(searchTerm)) {
          filtered.push(question);
        }
      });
      setFilteredQuestions(filtered.slice(0, numQuestions));
    } else if (searchTerm.length < 3) {
      setFilteredQuestions(questions.slice(0, numQuestions));
    }
  }, [questions, searchTerm, setFilteredQuestions, numQuestions]);

  return (
    <QuestionSearchBar>
      <Input
        onChange={(event) => setSearchTerm(event.target.value)}
        type="text"
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
      />
      <Button type="submit" style={{ width: '14%' }}>
        <i className="fa-solid fa-magnifying-glass" />
      </Button>
    </QuestionSearchBar>
  );
}

const QuestionSearchBar = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #82827d;
  padding: 10px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 10px;
`;

const Input = styled.input`
  width: 80%;
  height: 44px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;
const Button = styled.button`
  height: 50px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-left: -1%;
`;
export default QuestionSearch;
