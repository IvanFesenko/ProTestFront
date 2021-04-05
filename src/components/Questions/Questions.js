import React, { useEffect, useState } from 'react';

import QuestionCard from './QuestionCard';
import QuestionHeader from './QuestionHeader';

import { Button } from './Button/Button.style';
import ArrowLeft from './Button/ArrowLeft';
import ArrowRight from './Button/ArrowRight';

import styles from './Question.module.css';

const techTest = {
  ...[
    {
      question: 'How many testing principles are there?',
      questionId: 489,
      answers: ['5', '6', '7', '8', '9', "I don't know"],
      rightAnswer: '7',
      userAnswer: null,
    },
    {
      question: 'Verification is – ',
      questionId: 2,
      answers: [
        'In fact, it answers the question of whether the software is created and tested correctly and whether all the requirements are taken into account',
        'During the verification process, we make sure that all the created application functionality works correctly and logically, right',
        'The verification structure includes such components as verification of validated requirements, technical documentation and correct execution of program code at any stage of software development and testing',
        'Options 2 and 3 are correct',
        'All options are correct',
        'All options are incorrect',
      ],
      rightAnswer: 'All options are correct',
      userAnswer: null,
    },
    {
      question: 'Validation is – ',
      questionId: 3,
      answers: [
        'Answers the question whether the product is being created correctly in terms of customer expectations',
        'During the validation process, we make sure that the product fully complies with the behavior that is expected of it and that the client knows about the presence of such functionality',
        'Validation, in its essence, largely includes an overall assessment of the software and can be based solely on subjective opinion regarding the correct operation of the application or its components',
        'Options 1 and 3 are correct',
        'All options are correct',
        'All options are incorrect',
      ],
      rightAnswer: 'All options are correct',
      userAnswer: null,
    },
    {
      question: 'Which of the following is a MINUS in the Waterfall method?',
      questionId: 4,
      answers: [
        'High transparency of development and project phases',
        'Stability of requirements',
        'Facilitates the work of drawing up a project plan and assembling a project team',
        'All requirements must be known at the beginning of the project life cycle',
        'Clear consistency',
        'All options are correct',
        'All options are incorrect',
      ],
      rightAnswer:
        'All requirements must be known at the beginning of the project life cycle',
      userAnswer: null,
    },
    {
      question:
        'THIS software development methodology is mainly aimed at reducing the work being done at the moment. In this methodology: there are no time limits for either tasks or sprints; there are more and fewer tasks; There is no direct need to set deadlines for completing tasks, but you still need to measure them for a general presentation. What methodology are we talking about?',
      questionId: 5,
      answers: [
        'Waterfall',
        'Scrum',
        'Agile',
        'Kanban',
        'This definition applies to all methodologies',
        'There is not a right option',
      ],
      rightAnswer: 'Kanban',
      userAnswer: null,
    },
    {
      question: 'What does XP stands for in testing',
      questionId: 6,
      answers: [
        'eXPerience',
        'eXtreme Programming',
        'eXperience Points',
        'XP Injection',
        'All options are correct',
        'All options are incorrect',
      ],
      rightAnswer: 'eXtreme Programming',
    },
    {
      question: "Agile's main ideas",
      questionId: 7,
      answers: [
        'People and interactions are more important than processes and tools',
        'A working product is more important than comprehensive documentation',
        'Cooperation with the customer is more important than agreeing on the terms of the contract',
        'Being ready for change is more important than following the original plan',
        'All options are correct',
        'All options are incorrect',
      ],
      rightAnswer: 'All options are correct',
    },
    {
      question:
        'What methodology are these 4 stages about: Inception, Elaboration, Construction, Transition',
      questionId: 8,
      answers: [
        'RUP',
        'Kanban',
        'Scrum',
        'Agile',
        'Waterfall',
        'All options are incorrect',
      ],
      rightAnswer: 'RUP',
    },
    {
      question: 'The correct sequence of Scrum elements',
      questionId: 9,
      answers: [
        'Sprint Planning and Sprint Backlog Creation - Working on the sprint. Scrum meetings - Product testing and demonstration - Retrospective. Planning the next sprint',
        'Creating a product backlog - Working on a sprint. Scrum meetings - Product testing and demonstration - Retrospective. Planning the next sprint',
        'Product Backlog Creation - Sprint Planning and Sprint Backlog Creation - Product Testing and Demo - Retrospective. Planning the next sprint',
        'Creating a Product Backlog - Planning a Sprint and creating a Sprint Backlog - Working on a Sprint. Scrum meetings - Retrospective. Planning the next sprint',
        'Creating a Product Backlog - Planning a Sprint and creating a Sprint Backlog - Working on a Sprint. Scrum meetings - Product testing and demonstration',
        'All options are incorrect',
      ],
      rightAnswer: 'All options are incorrect',
    },
    {
      question: 'What skills are most often required from a project manager?',
      questionId: 10,
      answers: [
        'Collection and systematization of project requirements',
        'Work execution plan, KPI, mindmaps',
        'Search for performers, freelancers, drawing up a portrait of the desired employee for HR',
        'Setting tasks and monitoring deadlines',
        'All options are correct',
        'All options are incorrect',
      ],
      rightAnswer: 'All options are correct',
    },
    {
      question: 'What are the tasks of the Product Owner?',
      questionId: 11,
      answers: [
        'Setting tasks and monitoring deadlines',
        'Control of budget spending',
        'Maintenance of project documentation (technical specifications, contracts, acts, invoices, estimates, reports)',
        'And once again - BUDGETS and TERMS - this is what is most important in his work',
        'All options are correct',
        'All options are incorrect',
      ],
      rightAnswer: 'All options are incorrect',
    },
    {
      question: 'Product Owner controls',
      questionId: 12,
      answers: [
        'Who uses the product and which features are important to users, and which are secondary',
        'How users solve problems and problems, and who they are',
        'How you can attract more users; how to keep current ones and how to bring them to payment',
        'Why users abandon the product (it may be in an inconvenient interface, technical bugs, lack of necessary functions or cost)',
        'All options are correct',
        'All options are incorrect',
      ],
      rightAnswer: 'All options are correct',
    },
  ],
};


function Questions() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [error, setError] = useState(null);
  const keys = Object.keys(techTest);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  }, [error]);

  const sendAnswers = () => {
    const results = {};
    for (const questionID in techTest) {
      const question = techTest[questionID];
      if (!question.userAnswer) {
        setError('not all question get answer');
        return;
      }
      results[question.questionId] = question.userAnswer;
    }

  };

  const nextQuestion = () => {
    if (currentQuestionIndex + 1 <= keys.length - 1) {
      setCurrentQuestionIndex(prevState => prevState + 1);
    }
  };
  const prevQuestion = () => {
    if (currentQuestionIndex - 1 >= 0) {
      setCurrentQuestionIndex(prevState => prevState - 1);
    }
  };

  return (
    <div className={styles.questionsMain}>
      <QuestionHeader sendAnswers={sendAnswers} error={error} />
      <QuestionCard
        currentQuestion={currentQuestionIndex}
        questions={techTest}
        error={error}
      />
      <div className={styles.questionNavigationButtons}>
        <Button onClick={prevQuestion}>
          <ArrowLeft />
          <span>Previous question</span>
        </Button>
        <Button onClick={nextQuestion}>
          <span>Next question</span>
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}

export default Questions;
