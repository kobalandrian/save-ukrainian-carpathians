import React from 'react';
import '../css/post.css';
import postImg1 from '../img/topic1.jpg';
import postImg2 from '../img/topic2.jpg';
import postImg21 from '../img/topic2-1.jpg';
import postImg3 from '../img/topic3.jpg';


class Post extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            classPost: 'hide',
            topic1: {
                name: 'Mukachevo.net',
                title: 'Екологи опублікували у мережі шокуючі світлини вирубаних Карпат ',
                img: postImg1,
                text: 'Активісти проаналізували супутникові знімки та виявили 50 гектарів "лисих" схилів. Масштабну вирубку “Лісова Варта” WWF виявила в Усть-Чорнянському лісництві, на Закарпатті. Крім цього стало відомо, що палнується вирубати ще понад 13 гектарів. Коли активісти спробували потрапити на місце вирубки, то дорогу їм перекрили кілька десятків невідомих осіб переважно міцної статури. Але згодом вони таки пробрались. Переконайтесь самі, дивіться відео: http://www.mukachevo.net/ua/news/view/366603 . Про порушення повідомили аудиторів компанії SGS, які видали сертифікат, а також український і міжнародний офіси Лісової наглядової ради (FSC). Попри "період тиші", із 7:00 до 12:00 невідомі особи зрубали близько сотні дерев. Вибірково оглянувши пні свіжозрізаних дерев, ми виявили, що відсоток хворих дерев може бути значно меншим, ніж зазначений у документації” – заявив координатор проекту "Лісова варта"  Дмитро Карабчук. ',
                year: '2018',
                month: '06',
                day: '20' },
            topic2: {
                name: 'Andriy Kohut',
                title: 'Borzhavsky ridge in Transcarpathia intends to build wind stations. Environmentalists are against!',
                img: postImg2,
                img2: postImg21,
                text: 'On his Facebook page activist, Andrew Kohut wrote about the intention of Turkish investors to actually build the entire range with 140-meter windmills. Kohut also estimated that tourism revenues will fall significantly. Windmills will also make it impossible to engage in paragliding on the Borzhavsky ridge. Most of the comments in this post were negative. Environmentalists and community activists are opposed to such building up. It was about destroying the tourist infrastructure and harming the environment. It is planned to build a wide road to the windmills, along with the windmills, it will be impossible to collect mushrooms and berries. The question of the legitimacy of such construction was also raised because the implementation of such a project requires a lot of permissive documents and the consent of local authorities and communities. It is not yet known what the continuation will be. Activists and ecologists are determined to make strong protests. The developer also does not intend to retreat.',
                year: '2018',
                month: '02',
                day: '03' },
            topic3: {
                name: 'Mukachevo.net',
                title: 'Every year, 1% of the Carpathian Mountains disappears due to the forest felling — WWF',
                img: postImg3,
                text: 'During 1984-2016, WWF Ukraine ForestWare specialists (financial support from the International Forestry Division of the United States) carried out studies on changes in the forest cover of the eco-region of the Ukrainian Carpathians in the Lviv, Transcarpathian, Ivano-Frankivsk and Chernivtsi regions. For research, the experts analyzed images of the Carpathian forests captured by NASAs "Landsat" satellites, using the TimeSync visualization tool. The results of the study showed that the constant average forest ecosystem in the last 30 years was close to 65.5%. The increase in the volume of logging in the Ukrainian Carpathians was also revealed. The revealed trend of changes in the forest cover indicates an increase in the damage to the forest tent. The greatest number of them is caused by continuous and selective felling, which in total make up about 92% and only 8% are natural damage. The annual value of such forest felling (in recent years more often) exceeds 1% of the Carpathian Forest covered with forest. "It should be noted that the findings as of 2016 do not indicate intensive forest use, in terms of estimating the total area, which leaves the possibility of sustainable development of the forest sector of the Carpathians. If we take into account the considerable forest area that performs mainly ecological and environmental functions and is not a part of planned (main) forest use, then it should be noted that the further increase in the volume of felling of forests massively concentrated in the basins of some years may pose a threat to the ecological stability of the whole region " , - warns the coordinator of the project "Forest guard" Dmitry Karabchuk. First of all, according to the expert, it refers to significant forest cover violations related to the use of so-called, continuous sanitary felling in significant (over 10 hectares) mountain forest areas that have become massive in recent years.',
                year: '2019',
                month: '03',
                day: '02' } 
        };
       
    };
    
    render() {        

        return (
          <div>
          {/*
          <article className = "Post flex-container">
            <div className="flex-items">
              <img className = "avatar" src = { this.state.topic1.img } alt = { this.state.topic1.name } /> 
            </div>
            <div className="flex-items">
              <h2 className = "post-title" > { this.state.topic1.title } </h2> 
              <div className = "post-text" > { this.state.topic1.text } </div> 
              <div className = "post-autor" >
                <h4 className = "autor col-6" > Autor: { this.state.topic1.name } </h4> 
                <div className = "date col-6" > { this.state.topic1.year +' / '+ this.state.topic1.month +' / '+  this.state.topic1.day } </div> 
              </div >
            </div>
          </article>
          */}
          <article className = "Post flex-container">
            <div className="flex-items">
              <img className = "avatar" src = { this.state.topic2.img } alt = { this.state.topic2.name } />
              <br /> 
              <img className = "avatar" src = { this.state.topic2.img2 } alt = { this.state.topic2.name } />
            </div>
            <div className="flex-items">
              <h2 className = "post-title" > { this.state.topic2.title } </h2> 
              <div className = "post-text" > { this.state.topic2.text } </div> 
              <div className = "post-autor" >
                <h4 className = "autor col-6" > Autor: { this.state.topic2.name } </h4> 
                <div className = "date col-6" > { this.state.topic2.year +' / '+ this.state.topic2.month +' / '+  this.state.topic2.day } </div> 
              </div >
            </div>
          </article>
          <article className = "Post flex-container">
            <div className="flex-items">
              <img className = "avatar" src = { this.state.topic3.img } alt = { this.state.topic3.name } /> 
            </div>
            <div className="flex-items">
              <h2 className = "post-title" > { this.state.topic3.title } </h2> 
              <div className = "post-text" > { this.state.topic3.text } </div> 
              <div className = "post-autor" >
                <h4 className = "autor col-6" > Autor: { this.state.topic3.name } </h4> 
                <div className = "date col-6" > { this.state.topic3.year +' / '+ this.state.topic3.month +' / '+  this.state.topic3.day } </div> 
              </div >
            </div>
          </article>
          </div>                 
        );
    }
}

export default Post;