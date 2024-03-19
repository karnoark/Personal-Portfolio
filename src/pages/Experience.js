import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../styles/Experience.css"

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement 
        className="vertical-timeline-element--education" 
        date="2006 - 2016" 
        iconStyle={{background: "#3e999a", color: "#fff"}} 
        icon={<span>School</span>}
        >
          <h3 className='vertical-timeline-element-title'> K.P.S.P, Sangli, Maharashtra</h3>
          <p>Primary Education </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className="vertical-timeline-element--education" 
        date="2016 - 2018" 
        iconStyle={{background: "#34d97a", color: "#fff"}} 
        icon={<span>HighSchool</span>}
        >
          <h3 className='vertical-timeline-element-title'> M.G.S.K.G, Sangli, Maharashtra</h3>
          <p>Higher Education </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className="vertical-timeline-element--education" 
        date="2018 - 2022" 
        iconStyle={{background: "#3d315a", color: "#fff"}} 
        icon={<span>College</span>}
        >
          <h3 className='vertical-timeline-element-title'> COEP, Pune, Maharashtra</h3>
          <p>Engineering </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className="vertical-timeline-element--workkk" 
        date="2022 -" 
        iconStyle={{background: "#e9d35b", color: "#fff"}} 
        icon={<span>Work</span>}
        >
          <h3 className='vertical-timeline-element-title'> Capgemini, Banglore, Karnataka</h3>
          <p>Job </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;