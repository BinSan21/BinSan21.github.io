import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faUsers, faCertificate } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Education & Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="August 2026 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faUsers} />}
          >
            <h3 className="vertical-timeline-element-title">Undersecretary, Literary Committee</h3>
            <h4 className="vertical-timeline-element-subtitle">MSU-IIT College of Computer Studies - CA Society</h4>
            <p>
              Leadership, Student Organization, Event Coordination
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faCertificate} />}
          >
            <h3 className="vertical-timeline-element-title">Conferences & AI Training</h3>
            <h4 className="vertical-timeline-element-subtitle">MSU-IIT, Iligan City</h4>
            <p>
              Participated in the Regional Conference on Information Technology Education (RCITE), ICUNSSI, and AI Career Readiness Training.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faCertificate} />}
          >
            <h3 className="vertical-timeline-element-title">Tech Symposiums & Workshops</h3>
            <h4 className="vertical-timeline-element-subtitle">MSU-IIT, Iligan City</h4>
            <p>
              Attended the RT-Thread Based Technology Symposium, my.ComApps Technology Development Program, and Tech Forward smart societies seminar.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2023 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">BS Computer Applications, Major in Embedded Systems</h3>
            <h4 className="vertical-timeline-element-subtitle">Mindanao State University - Iligan Institute of Technology</h4>
            <p>
              CGPA: 1.72761. Focused on Firmware, Microcontrollers, RTOS, and IoT architecture.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2019 - 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">TVL-CSS Student (With Honors)</h3>
            <h4 className="vertical-timeline-element-subtitle">Tomas Cabili National High School - Annex</h4>
            <p>
              Technical-Vocational-Livelihood track specializing in Computer System Servicing.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;