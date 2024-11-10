import './Experience.css'
import { Text, Timeline } from '@mantine/core';
import { IconRobot, IconSchool } from '@tabler/icons-react';
function Experience() {

  return(
    <>  
      <div className='timeline-container'>
      <Timeline color="violet" active={1} bulletSize={35}>
        <Timeline.Item title="Programming advisor @SamuraiCode" className='job-title' bullet={<IconRobot size="2rem" />}>
            <Text c="dimmed" size="md" ta='left' fs='italic'>2022-Current</Text>
            <Text c="dimmed" size="lg" ta='left'>- Organized and created teaching material on programming topics.</Text>
            <Text c="dimmed" size="lg" ta='left'>- Collaborated and developed computer vision programs using Python and OpenCV.</Text>
            <Text c="dimmed" size="lg" ta='left'>- Planned and executed projects focused on control systems in Java and Python.</Text>
        </Timeline.Item>

        <Timeline.Item title="Programming teacher @RobotPunk" className='job-title' bullet={<IconSchool size="2rem" />}>
            <Text c="dimmed" size="md" ta='left' fs='italic'>July 2021-December 2021</Text>
            <Text c="dimmed" size="lg" ta='left'>- Created didactic courses for teaching basic programming concepts.</Text>
            <Text c="dimmed" size="lg" ta='left'>- Planned and developed programming education programs.</Text>
        </Timeline.Item>
      </Timeline>
      </div>
    </>
  );
}

export default Experience;
