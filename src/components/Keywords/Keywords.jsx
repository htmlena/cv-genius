import React from 'react';
import '../Generator/style.scss';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import '../Generator/style.scss';

const Keywords = () => {
  return (
    <div className="keywords-container">
      <div className="section-header-container">
        <h2>Resume keywords</h2>
        <InfoTooltip
          content={
            <>
              <p>
                List all keywords from the concrete job offer you will be
                creating your CV for. Make sure you will use them in the
                sections below, either as an exact keywords or as a description
                of your responsibilities or outcomes. Check the Tips for more
                guidance on how to use them.
              </p>{' '}
              <p>
                {' '}
                Example of keywords: Javascript, Bootstrap, Google Analytics,
                Github, Team management, Teamwork, Time management,
                Independence, Communication, Orientation to Detail, etc.
              </p>
            </>
          }
        />
      </div>
      <div className="hobbies-textarea-grid">
        <div className="label-input-container">
          <label className="label-block" htmlFor="keywords"></label>
          <textarea
            className="input-keywords"
            name="keywords"
            id="keywords"
            rows="3"
            cols="25"
            placeholder="React, API, SaaS platform, SEO, Creativity, Communication,..."
          ></textarea>
        </div>
      </div>{' '}
    </div>
  );
};
{
  /* <div className="keywords-info-container">
  <div className="keywords-header-container">
    <h2>Resume keywords</h2>
    <InfoTooltip
      content={
        <>
          <p>
            List all keywords from the concrete job offer you will be
            creating your CV for. Make sure you will use them in the
            sections below, check the "i" for more tips. Example of
            keywords: Javascript, Bootstrap, Google Analytics, Teamwork,
            Time management, Independence at work.
          </p>
        </>
      }
    />
  </div>
  <form className="keywords-form-container">
    <div className="label-input-container">
      <label className="label-block" htmlFor="keywords"></label>
      <textarea
        className="input"
        name="keywords"
        id="keywords"
        rows="5"
        cols="25"
        placeholder="React, API, SaaS platform, SEO, Creativity, Communication,..."
      ></textarea>
    </div>
  </form>
</div> */
}

export default Keywords;
