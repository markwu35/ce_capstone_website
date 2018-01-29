import React, { Component } from 'react';
import MemberItem from './MemberItem';
import FileItem from './FileItem';
import './ProjectItem.css';

import aaron_chang from './../../img/aaron_chang.jpg';
import ben_may from './../../img/ben_may.jpg';
import carlos_beltran from './../../img/carlos_beltran.jpg';
import salim_benhaddou from './../../img/salim_benhaddou.jpg';
import garrison_carter from './../../img/garrison_carter.jpg';

import kyle_carson from './../../img/kyle_carson.jpg';
import ryan_kaveh from './../../img/ryan_kaveh.jpg';
import jon_young from './../../img/jon_young.jpg';

import yang_ren from './../../img/yang_ren.jpg';
import tristan_seroff from './../../img/tristan_seroff.jpg';
import asitha_kaduwela from './../../img/asitha_kaduwela.jpg';
import jesus_diera from './../../img/jesus_diera.jpg';

import nathan_bradley from './../../img/nathan_bradley.jpg';
import jesus_castro from './../../img/jesus_castro.jpg';
import jeremiah_prousalis from './../../img/chip_placeholder.jpg';

import paul_killam from './../../img/paul_killam.png';
import christina_lim from './../../img/chip_placeholder.jpg';
import oliver_thio from './../../img/oliver_thio.jpg';

import brian_sandler from './../../img/brian_sandler.jpg';
import brenden_fujishige from './../../img/brenden_fujishige.jpg';
import marcellis_carr_barfield from './../../img/marcellis_carr_barfield.jpg';
import seyed_mohammad_ghazitabrizi from './../../img/chip_placeholder.jpg';
import richard_wei from './../../img/richard_wei.jpg';
import subhodeep_choudhury from './../../img/chip_placeholder.jpg';

class ProjectItem extends Component {
  constructor() {
    super();
    this.state = {
      member: [],
      file: []
    }
  }

  componentWillMount(){
    this.setState({member: [
      {
        name:"Ben May",
        projectId: 0,
        imgName: ben_may,
        year: "16_17"
      },
      {
        name:"Carlos Beltran",
        projectId: 0,
        imgName: carlos_beltran,
        year: "16_17"
      },
      {
        name:"Salim Benhaddou",
        projectId: 0,
        imgName: salim_benhaddou,
        year: "16_17"
      },
      {
        name:"Garrison Carter",
        projectId: 0,
        imgName: garrison_carter,
        year: "16_17"
      },
      {
        name:"Aaron Chang",
        projectId: 0,
        imgName: aaron_chang,
        year: "16_17"
      },
      {
        name:"Ryan Kaveh",
        projectId: 1,
        imgName: ryan_kaveh,
        year: "16_17"
      },
      {
        name:"Kyle Carson",
        projectId: 1,
        imgName: kyle_carson,
        year: "16_17"
      },
      {
        name:"Jon Young",
        projectId: 1,
        imgName: jon_young,
        year: "16_17"
      },
      {
        name:"Yang Ren",
        projectId: 2,
        imgName: yang_ren,
        year: "16_17"
      },
      {
        name:"Tristan Seroff",
        projectId: 2,
        imgName: tristan_seroff,
        year: "16_17"
      },
      {
        name:"Asitha Kaduwela",
        projectId: 2,
        imgName: asitha_kaduwela,
        year: "16_17"
      },
      {
        name:"Nathan Bradley",
        projectId: 3,
        imgName: nathan_bradley,
        year: "16_17"
      },
      {
        name:"Jesus Castro",
        projectId: 3,
        imgName: jesus_castro,
        year: "16_17"
      },
      {
        name:"Jeremiah Prousalis",
        projectId: 3,
        imgName: jeremiah_prousalis,
        year: "16_17"
      },
      {
        name:"Paul Killam",
        projectId: 4,
        imgName: paul_killam,
        year: "16_17"
      },
      {
        name:"Christina Lim",
        projectId: 4,
        imgName: christina_lim,
        year: "16_17"
      },
      {
        name:"Oliver Thio",
        projectId: 4,
        imgName: oliver_thio,
        year: "16_17"
      },
      {
        name:"Brian Sandler",
        projectId: 5,
        imgName: brian_sandler,
        year: "16_17"
      },
      {
        name:"Brenden Fujishige",
        projectId: 5,
        imgName: brenden_fujishige,
        year: "16_17"
      },
      {
        name:"Marcellis Carr-Barfield",
        projectId: 5,
        imgName: marcellis_carr_barfield,
        year: "16_17"
      },
      {
        name:"Seyed Mohammad Ghazitabrizi",
        projectId: 5,
        imgName: seyed_mohammad_ghazitabrizi,
        year: "16_17"
      },
      {
        name:"Richard Wei",
        projectId: 5,
        imgName: richard_wei,
        year: "16_17"
      },
      {
        name:"Subhodeep Choudhury",
        projectId: 5,
        imgName: subhodeep_choudhury,
        year: "16_17"
      }

      ],
      file: [{
      	name: "Overview Poster",
      	projectId: 0,
      	link: "http://www.ece.ucsb.edu/Faculty/Johnson/ECE189/posters/flir_overview.pdf"
      },
      {
      	name: "Technical Poster",
      	projectId: 0,
      	link: "http://www.ece.ucsb.edu/Faculty/Johnson/ECE189/posters/flir_technical.pdf"
      },
      {
      	name: "IDR",
      	projectId: 0,
      	link: "http://www.ece.ucsb.edu/Faculty/Johnson/ECE189/IDR/FLIR.pdf"
      },
      {
      	name: "CDR",
      	projectId: 0,
      	link: "http://www.ece.ucsb.edu/Faculty/Johnson/ECE189/CDR/FLIRCDR.pdf"
      },
      {
      	name: "Final Presentation",
      	projectId: 0,
      	link: "http://www.ece.ucsb.edu/Faculty/Johnson/ECE189/final/flir.pdf"
      },
      {
      	name: "Poster",
      	projectId: 1,
      	link: "http://www.ece.ucsb.edu/Faculty/Johnson/ECE189/posters/gestur.pdf"
      },
      {
      	name: "IDR",
      	projectId: 1,
      	link: "http://www.ece.ucsb.edu/Faculty/Johnson/ECE189/IDR/Gestur.pdf"
      },
      {
      	name: "CDR",
      	projectId: 1,
      	link: "http://www.ece.ucsb.edu/Faculty/Johnson/ECE189/CDR/GesturCDR.pdf"
      },
      {
      	name: "Final Presentation",
      	projectId: 1,
      	link: "http://www.ece.ucsb.edu/Faculty/Johnson/ECE189/final/gestur.pdf"
      },
      {
      	name: "Poster",
      	projectId: 2,
      	link: "http://www.ece.ucsb.edu/Faculty/Johnson/ECE189/posters/hyperloop2.pdf"
      },
      {
      	name: "IDR",
      	projectId: 2,
      	link: "http://www.ece.ucsb.edu/Faculty/Johnson/ECE189/IDR/Hyperloop2.pdf"
      },
      {
      	name: "CDR",
      	projectId: 2,
      	link: "http://www.ece.ucsb.edu/Faculty/Johnson/ECE189/CDR/Hyperloop2CDR.pdf"
      },
      {
      	name: "Final Presentation",
      	projectId: 2,
      	link: "http://www.ece.ucsb.edu/Faculty/Johnson/ECE189/final/hyperloop2.pdf"
      },
      {
      	name: "Poster",
      	projectId: 3,
      	link: "http://www.ece.ucsb.edu/Faculty/Johnson/ECE189/posters/irhub.pdf"
      },
      {
      	name: "IDR",
      	projectId: 3,
      	link: "http://www.ece.ucsb.edu/Faculty/Johnson/ECE189/IDR/IRHub.pdf"
      },
      {
      	name: "CDR",
      	projectId: 3,
      	link: "http://www.ece.ucsb.edu/Faculty/Johnson/ECE189/CDR/IRHubCDR.pdf"
      },
      {
      	name: "Final Presentation",
      	projectId: 3,
      	link: "http://www.ece.ucsb.edu/Faculty/Johnson/ECE189/final/irhub.pdf"
      },
      {
      	name: "Poster",
      	projectId: 4,
      	link: "http://www.ece.ucsb.edu/Faculty/Johnson/ECE189/posters/ostracam2.pdf"
      },
      {
      	name: "IDR",
      	projectId: 4,
      	link: "http://www.ece.ucsb.edu/Faculty/Johnson/ECE189/IDR/OstraCam2.pdf"
      },
      {
      	name: "CDR",
      	projectId: 4,
      	link: "http://www.ece.ucsb.edu/Faculty/Johnson/ECE189/CDR/OstraCam2CDR.pdf"
      },
      {
      	name: "Final Presentation",
      	projectId: 4,
      	link: "http://www.ece.ucsb.edu/Faculty/Johnson/ECE189/final/ostracam2.pdf"
      },
      {
      	name: "Poster",
      	projectId: 5,
      	link: "http://www.ece.ucsb.edu/Faculty/Johnson/ECE189/posters/sonoscom.pdf"
      },
      {
      	name: "IDR",
      	projectId: 5,
      	link: "http://www.ece.ucsb.edu/Faculty/Johnson/ECE189/IDR/SONOS.pdf"
      },
      {
      	name: "CDR",
      	projectId: 5,
      	link: "http://www.ece.ucsb.edu/Faculty/Johnson/ECE189/CDR/SONOS2CDR.pdf"
      },
      {
      	name: "Final Presentation",
      	projectId: 5,
      	link: "http://www.ece.ucsb.edu/Faculty/Johnson/ECE189/final/sonoscom.pdf"
      },
      ]
    })
  }

  render() {
		let memberItems;
		if(this.state.member){
			memberItems = this.state.member.map(member => {
				
				if (this.props.project.projectId === member.projectId) {
					return (
						<MemberItem key={member.name} member={member} />
					);
				}
			});
		}

		let fileItems;
		if(this.state.file){
			fileItems = this.state.file.map(file => {
				
				if (this.props.project.projectId === file.projectId) {
					return (
						<FileItem key={file.name} file={file} />
					);
				}
			});
		}

    return (
        <div className="col xl6">
          <div className="card blue-grey darken-1">
            <div className="card-image">
              <img className="card-img" src={this.props.project.imgName} />
              <span className="card-title">{this.props.project.title}</span>
            </div>
            <div className="card-content white-text">
            	<span className="card-title activator grey-text text-darken-4">Members<i className="fa fa-ellipsis-v right"></i></span>
              <p>{memberItems}</p>
            </div>

						<div className="card-reveal">
						  <span className="card-title grey-text text-darken-4">Description<i className="fa fa-times right"></i></span>
						  <p>{this.props.project.description}</p>
						  <span className="card-title grey-text text-darken-4">Sponsors</span>
						</div>

            <div className="card-action">
            	{fileItems}
            </div>
          </div>
        </div>
    );
  }
}

export default ProjectItem;
