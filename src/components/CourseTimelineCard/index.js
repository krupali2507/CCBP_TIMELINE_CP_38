// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import {
  CourseTimelineCardContainer,
  HeaderContainer,
  DurationContainer,
  TitleCourse,
  Duration,
  Description,
  Tag,
} from './styledComponents'

const CourseTimelineCard = props => {
  const {itemDetail} = props
  const {courseTitle, duration, description, tagsList} = itemDetail

  return (
    <CourseTimelineCardContainer>
      <HeaderContainer>
        <TitleCourse>{courseTitle}</TitleCourse>
        <DurationContainer>
          <AiFillClockCircle height={30} width={30} />
          <Duration>{duration}</Duration>
        </DurationContainer>
      </HeaderContainer>
      <Description>{description}</Description>
      <ul>
        {tagsList.map(eachTag => (
          <Tag key={eachTag.id}>{eachTag.name}</Tag>
        ))}
      </ul>
    </CourseTimelineCardContainer>
  )
}

export default CourseTimelineCard
