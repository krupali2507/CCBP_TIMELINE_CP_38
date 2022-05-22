// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import {
  ProjectTimelineCardContainer,
  ProjectImage,
  HeaderContainer,
  DurationContainer,
  TitleProject,
  Duration,
  Description,
  Anchor,
} from './styledComponents'

const ProjectTimelineCard = props => {
  const {itemDetail} = props
  const {imageUrl, projectTitle, duration, description, projectUrl} = itemDetail

  return (
    <ProjectTimelineCardContainer>
      <ProjectImage src={imageUrl} alt="project image" />
      <HeaderContainer>
        <TitleProject>{projectTitle}</TitleProject>
        <DurationContainer>
          <AiFillCalendar height={30} width={30} />
          <Duration>{duration}</Duration>
        </DurationContainer>
      </HeaderContainer>
      <Description>{description}</Description>
      <Anchor href={projectUrl}>Visit</Anchor>
    </ProjectTimelineCardContainer>
  )
}

export default ProjectTimelineCard
