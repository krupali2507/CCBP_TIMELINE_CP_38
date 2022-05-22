// Write your code here
import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import {
  ProjectTimelineCardContainer,
  HeaderContainer,
  Heading,
  CCBPHeading,
} from './styledComponents'
import CourseTimelineCard from '../CourseTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimeLineCard = eachItem => {
    if (eachItem.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={eachItem.id} itemDetail={eachItem} />
    }
    return <CourseTimelineCard key={eachItem.id} itemDetail={eachItem} />
  }

  return (
    <ProjectTimelineCardContainer>
      <HeaderContainer>
        <Heading>
          MY JOURNEY OF <br />
          <CCBPHeading>CCBP 4.0</CCBPHeading>
        </Heading>
      </HeaderContainer>
      <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
        {timelineItemsList.map(eachItem => renderTimeLineCard(eachItem))}
      </Chrono>
    </ProjectTimelineCardContainer>
  )
}

export default TimelineView
