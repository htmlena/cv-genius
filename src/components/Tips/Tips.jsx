import React from 'react';
import Footer from '../Footer/Footer';
import './style.scss';
import { Link } from 'react-router-dom';

const Tips = () => {
  return (
    <>
      <div className="container-tips">
        <h1>A complex guide on how to create your CV</h1>
        <div>
          <p>
            Looking for a job can be challenging. But as with anything else, the
            more time you dedicate to preparation, the higher the chance is that
            you will be successful. CV Genius is here to guide you through the
            process of CV creation and give you tips on how to write your CV
            that stands out.
          </p>
        </div>
        <h2>
          Before you begin, think about your overall self career development.
        </h2>
        <div>
          <p>
            First of all, think about yourself. What is your vision? How would
            you like to continue developing in your career? What values are the
            most important to you in a work environment? Answers to these
            questions will help you create your personal brand and can help you
            decide about your career.{' '}
          </p>{' '}
        </div>{' '}
        <p>
          Imagine you are a junior Frontend developer. Your vision for the
          future may be to lead a team of frontend developers and work on
          projects that interest you, for example projects for non-profit
          organizations with an exceeding social impact. To get there, you may
          continue developing certain soft and hard skills along the way, and
          gain experience from one or two other positions before the vision can
          be fulfilled. If you keep in mind your goal and take conscious actions
          towards it, it is more likely you will reach the goal sooner and your
          career journey will bring you joy.
        </p>
        <div>
          <p>
            {' '}
            Your values that are important to you in a work environment may be
            for example: freedom, order and rules, possibility to be creative,
            and a teamwork. We recommend you to write down your TOP 10 values
            that are the most important to you. To be clear in what you seek in
            a work environment will be important in your decision making about
            the right company for you. The company's culture, how people behave
            to each other at work, the company's product, should match your
            values.{' '}
          </p>
        </div>{' '}
        <p>
          Before we start creating our self-presentation (CV, LinkedIn, web
          portfolio, etc.), it is good to create a certain filter on whom we
          target information on the market: it is a small or large company, it
          is a company in the Czech Republic or abroad (and in which market), I
          am looking for a company that allows remote / part time, is it a
          company where I will work as an external supplier, or am I looking for
          an employer, is it a company where Czech or another language is
          officially spoken, etc.? We recommend that you write this list (I want
          / may be / don't want) and have it in sight as a compass for further
          work, because your self-presentation for the start-up and for the
          corporate position will look different.
        </p>
        <div>
          <p>
            To wrap it up, now it should be clearer to you who you will be
            targeting in your CV and why. Now let's move to another important
            part in the CV creation process- mapping resume keywords.
          </p>
        </div>
        <h2>Map the resume keywords</h2>
        <div>
          <p>
            Job listings include the abilities and competencies an applicant
            needs in order to be a great hire. These skills become keywords used
            by recruiters and hiring managers to quickly identify top candidates
            whether they’re skimming with their eyes or using software to filter
            applicants based on resume keywords. Recruiters don’t carefully read
            resumes line by line. They take a quick glance and only dig deeper
            if past job titles or skills pique their interest.
          </p>
        </div>
        <p>
          {' '}
          Having the right resume keywords is even more critical when technology
          enters the mix. Most companies (including 99% of Fortune 500) use
          software known as applicant tracking systems (ATS) that can scan the
          content of a resume to make it searchable. Some systems, like Taleo,
          can even automatically filter and rank applicants based on the job
          description. This means that a highly qualified applicant could slip
          through the cracks or get wrongly rejected if their resume isn’t
          optimized with the right keywords.
        </p>
        <div>
          <p>
            {' '}
            The job offer keywords are different for every field and position.
            An example of keywords for IT field, junior frontend developer
            position may be: React, Javascript, Github for hard skills and a
            quick learner, attention to detail and creativity for soft skills.
            Use the space in the CV generator dedicated to keywords for listing
            all keywords from the certain job offer to ensure to match them in
            your CV.
          </p>
        </div>
        <h2>Create your CV </h2>
        <h3>Personal info</h3>
        <div>
          <p>
            This is the first section everyone sees when looking at your CV. We
            highly recommend to include your LinkedIn URL with a completed
            profile and one more URL to present your project, website or github
            repositories. This way you can provide more information about your
            work and your background.
          </p>
        </div>
        <p>
          {' '}
          The Resume summary statement should give a quick introduction into who
          you are, what you have accomplished and where you are heading. It is a
          clear, brief message or “commercial” about you. It communicates who
          you are, what you’re looking for and how you can benefit an
          organization. Keep the message under 5 sentences. We recommend
          sticking to the point and taking into account the position and company
          you are applying to.
        </p>{' '}
        <div>
          <p>Example of a resume statement:</p>
          <p className="resume-statement-example">
            {' '}
            Senior Account Executive with experience helping companies clean and
            enrich their data with sales intelligence tools in Salesforce and
            Eloqua. Managing big data effectively, I have helped over 200
            clients reduce IT infrastructure overhead by up to 40%. My wish is
            to share as well as continue enriching my know-how within the Big
            Data team in Apple.
          </p>
        </div>
        <h3>Work Experience</h3>
        <p>
          Start by reading the job listing's keywords and adjust this section
          accordingly. Try to include them into your job description. If you are
          an experienced senior, we recommend you to include your last 3 most
          relevant job experiences to a position you are applying for. If you
          are a student or just graduated, include also your internships or any
          activities during school (i.e. AIESEC). Include a description of your
          responsibilities and outputs you have achieved in the position.
        </p>
        <h3>Education</h3>
        <div>
          <p>
            Firstly, you do not have to include all of your schools. For
            example- in case you have a higher education, you do not have to
            mention your elementary or high school. Start with your highest
            achieved education and include one or two institutions you have
            attended before. If you studied at a university, do not forget to
            add your degree.
          </p>
        </div>
        <p>
          {' '}
          In case you completed a requalification course or any other
          long-period course, and you have an ambition to work in this field, we
          recommend that you include the course into the education section.
          Description of the studied courses is optional, but it provides you
          with another space for using the keywords which match the concrete job
          offer.
        </p>{' '}
        <h3>Skills</h3>
        <div>
          <p>
            Skills are your natural talents and the expertise you develop to
            perform a task or a job. The skills are usually divided into the
            Soft skills- a set of requirements necessary for the quality
            performance of work, which do not depend on specific expertise, but
            on the complex abilities of man. And the Hard skills: a set of
            professional requirements (theoretical knowledge, practical skills)
            needed to perform the profession.
          </p>
        </div>
        <p>
          Think about your acquired skills and check whether they match the
          concrete job offer. If they do, use them in the exact keywords as in
          the job offer. Be honest with your level, but do not underestimate
          yourself. We recommend using four hard and four soft skills,
          prioritized by the ones referred to in the certain job offer. If you
          are a student or graduate looking for your first job, you can only
          list your soft skills. If you are looking for a job in Czech Republic,
          we recommend checking this list of skills listed by the central
          database of competencies.{' '}
        </p>
        <h3>Languages</h3>
        <p>
          List all your language skills- including your native tongue. If you
          are not sure about your level, you can test your approximate level by
          completing a verified test online which will allow you to estimate
          your abilities. Moreover, in case a language test would be a part of
          the recruitment process, your results will match your CV data.
        </p>
        <h3>Courses</h3>
        <p>
          Try to list courses that could be a fit for the certain job offer. For
          example- if you did a yoga lector requalification course, but you are
          applying for a Sales position, it is better to give this space to
          sales-relevant courses such as Negotiation course and mention the Yoga
          course below, in the hobbies section.
        </p>
        <h3>Hobbies</h3>
        <p>
          Usually, this is the final part of your CV and even though this part
          is optional, we highly recommend using it in a way that will be
          beneficial to you, as a candidate. Try not to write about general
          hobbies such as “I like to read books and travel”. Be more specific
          and start with the hobbies which describe you the most:”I travelled to
          20+ countries and spent 2 months couchsurfing across South Asia”. Or:
          “I am an enthusiast house plant grower, I nurture various types of
          plants, including a giant Aloe Vera.”
        </p>
        <h2>Now you are ready to write your CV!</h2>
        <Link className="create-cv button-top" to="/cv-generator">
          Create your CV
        </Link>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Tips;
