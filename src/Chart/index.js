import React, { Fragment } from 'react'
import { VictoryChart, VictoryLine, VictoryTheme, VictoryContainer, VictoryLegend } from 'victory'
import { func, f1, f2 } from './lab7'

function Chart() {

  return (<Fragment>
    <VictoryChart
      maxDomain={ { x: 1.5, y: 1.5 } }
      minDomain={ { x: -0.5, y: -0.5 } }
      theme={ VictoryTheme.material }
      containerComponent={ <VictoryContainer responsive={ false }/> }
      width={ 800 }
      height={ 800 }>
      <VictoryLegend x={ 200 } y={ 50 }
                     orientation="horizontal"
                     gutter={ 20 }
                     itemsPerRow={ 3 }
                     data={ [ {
                       name: 'Graph of a function', symbol: { fill: 'd00f50' }, labels: { fill: 'd00f50' }
                     } ] }
      />
      <VictoryLine data={ func }
                   animate={ { duration: 1500 } }
                   style={ {
                     data: {
                       stroke: '#d00f50'
                     }
                   } }/>
      <VictoryLine data={ f1 }
                   animate={ { duration: 1500 } }
                   style={ {
                     data: {
                       stroke: '#0f3fd0'
                     }
                   } }/>
      <VictoryLine data={ f2 }
                   animate={ { duration: 1500 } }
                   style={ {
                     data: {
                       stroke: '#0fd022'
                     }
                   } }/>
    </VictoryChart>
  </Fragment>)
}

export default Chart