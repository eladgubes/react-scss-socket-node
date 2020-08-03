import React from 'react';
// import categoryService from '../service/categoryService'
import { TopWaveBorder, BottomWaveBorder } from './WaveBorder'
import { TagCard } from './TagCard'


export class Categories extends React.Component {


    componentDidMount() {
    }


    render() {
        const BottomWave = < BottomWaveBorder className={`bottom-border${this.props.idx}`} />
        const TopWave = (this.props.idx > 1) ? '' : < TopWaveBorder className={`top-border${this.props.idx}`} />
        if (!this.props.category) return 'THERE ARE NO PROPS HERER...';
        const { category } = this.props
        return (
            <React.Fragment>

                <div className="categories">
                    <div className="category container margin-center">
                        <div className="title-cat flex space-between">
                            <h1>{category.title}</h1>
                        </div>
                        <div className="main-cat-container flex space-around">
                            <div className="img-cat-description flex column">
                                <div className="main-category-img ">
                                    {category.mainImgUrl && <img src={category.mainImgUrl} alt={`${category.description}`} />}
                                </div>
                                <div className="description">
                                    <p>{category.description}</p>
                                </div>
                            </div>
                            <div className="category-img" >
                                {category.catData && category.catData.map((Data, idx) => <TagCard key={idx} catData={Data} onSearch={(searchKey) => this.props.onSearch(searchKey)} idx={idx} />)}

                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-wave">{BottomWave}</div>
                <div className="top-wave"> {TopWave}</div>

            </React.Fragment>
        )
    }
}