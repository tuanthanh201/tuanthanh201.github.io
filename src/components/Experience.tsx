import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

interface ExperienceCardProps {
	experience: {
		title: string;
		companyName: string;
		icon: string;
		iconBg: string;
		date: string;
		points: string[];
	};
}

const ExperienceCard = ({
	experience: { title, companyName, icon, iconBg, date, points },
}: ExperienceCardProps) => {
	return (
		<VerticalTimelineElement
			contentStyle={{
				background: '#1d1836',
				color: '#fff',
			}}
			contentArrowStyle={{
				borderRight: '7px solid  #232631',
			}}
			date={date}
			iconStyle={{
				background: iconBg,
			}}
			icon={
				<div className='flex justify-center items-center w-full h-full'>
					<img
						src={icon}
						alt={companyName}
						className='w-[60%] h-[60%] object-contain'
					/>
				</div>
			}
		>
			<div>
				<h3 className='text-white text-[24px]'>{title}</h3>
				<p
					className='text-secondary text-[16px] font-semibold'
					style={{
						margin: 0,
					}}
				>
					{companyName}
				</p>
			</div>

			<ul className='mt-5 list-disc ml-5 space-y-2'>
				{points.map((point, index) => (
					<li
						key={`experience-point-${index}`}
						className='text-white-100 text-[14px] pl-1 tracking-wider'
					>
						{point}
					</li>
				))}
			</ul>
		</VerticalTimelineElement>
	);
};

const Experience = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>What I have done so far</p>
				<p className={styles.sectionHeadText}>Work Experience</p>
			</motion.div>

			<div className='mt-20 flex flex-col'>
				<VerticalTimeline>
					{experiences.map((experience, index) => (
						<ExperienceCard
							key={`experience-card-${index}`}
							experience={experience}
						/>
					))}
				</VerticalTimeline>
			</div>
		</>
	);
};

const WrappedExperience = SectionWrapper(Experience, 'experience');

export default WrappedExperience;
