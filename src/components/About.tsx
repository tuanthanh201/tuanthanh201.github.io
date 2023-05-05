import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

interface ServiceCardProps {
	index: number;
	title: string;
	icon: string;
}

const ServiceCard = ({ title, icon, index }: ServiceCardProps) => {
	return (
		<Tilt className='xs:w-[250px] w-full'>
			<motion.div
				variants={fadeIn('right', 'spring', 0.5 * index, 0.7)}
				className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
			>
				<div
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					options={{
						max: 45,
						scale: 1,
						speed: 450,
					}}
					className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
				>
					<img src={icon} alt={title} className='w-16 h-16 object-contain' />
					<h3 className='text-white text-[20px] font-bold text-center'>
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};

const About = () => {
	return (
		<>
			<motion.div variants={textVariant(0)}>
				<p className={styles.sectionSubText}>Introduction</p>
				<p className={styles.sectionHeadText}>Overview</p>
			</motion.div>

			<motion.p
				variants={fadeIn('none', '', 0.1, 1)}
				className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
			>
				I am a third-year student at the University of Waterloo, majoring in
				Computer Science with a specialization in Software Engineering. With
				experience in JavaScript and TypeScript, I have developed expertise in
				popular frameworks such as React, Redux, and Node.js. I am a quick
				learner and hard-working individual who enjoys solving complex problems
				and collaborating with others to achieve great results.
			</motion.p>

			<div className='mt-20 flex flex-wrap gap-10'>
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</>
	);
};

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;
