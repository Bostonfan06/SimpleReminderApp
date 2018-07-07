import React, {Component} from 'react'
import {SketchField, Tools} from 'react-sketch';
import './Draw.css' 
class Draw extends Component {
     render() {
        return (
            <div className="contentdraw">
            <SketchField  width='1024px' 
                         height='768px' 
                         tool={Tools.Pencil} 
                         lineColor='black'
                         lineWidth={3}/>
            </div>
        )
     }
}

export default Draw