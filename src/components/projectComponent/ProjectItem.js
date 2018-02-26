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

//SPOT id: 6
import bryan_lavin_parmenter from './../../img/bryan_lavin_parmenter.jpg';
import brandon_pon from './../../img/brandon_pon.jpg';
import neil_o_bryan from './../../img/neil_o_bryan.jpg';
import saurabh_gupta from './../../img/saurabh_gupta.jpg';

//TersiaScope   id: 7
import john_bowman from './../../img/john_bowman.jpg';
import devon_porcher from './../../img/devon_porcher.jpg';
import brian_young from './../../img/brian_young.jpg';
import timothy_kwong from './../../img/timothy_kwong.jpg';
import trevor_hecht from './../../img/trevor_hecht.jpg';

//Deep Vision   id: 8
import jenny_zheng from './../../img/Zeng_EE.jpg';
import chenghao_jiang from './../../img/chenghao_jiang.jpg';
import terry_xie from './../../img/terry_xie.jpg';
import charlie_xu from './../../img/Xu_CE.jpg';

//Wall-E        id: 9
import veena_chandran from './../../img/veena_chandran.jpg';
import karthik_kribakaran from './../../img/karthik_kribakaran.jpg';
import vincent_wang from './../../img/vincent_wang.jpg';
import wesley_peery from './../../img/wesley_peery.jpg';
import franklin_tang from './../../img/franklin_tang.jpg';
import karli_yokotake from './../../img/karli_yokotake.jpg';

//Gaucho Hawk   id: 10
import jack_zang from './../../img/jack_zang.jpg';
import yesh_ramesh from './../../img/yesh_ramesh.jpg';
import vikram_sharma from './../../img/vikram_sharma.jpg';
import richard_young from './../../img/richard_young.jpg';
import kurt_madland from './../../img/kurt_madland.jpg';
import shaoyi_zhang from './../../img/shaoyi_zhang.jpg';

//Hover Hand    id: 11
import steven_fields from './../../img/chip_placeholder.jpg';
import colin_garrett from './../../img/colin_garrett.jpg';
import miclos_lobins from './../../img/miclos_lobins.jpg';
import zach_meyer from './../../img/zach_meyer.jpg';
import austin_dorotheo from './../../img/austin_dorotheo.jpg';

//Hyperloop III id: 12
import cam_bijan from './../../img/cam_bijan.jpg';
import dylan_vanmali from './../../img/dylan_vanmali.jpg';
import alex_jun from './../../img/alex_jun.jpg';
import mark_wu from './../../img/mark_wu.jpg';
import david_donaldson from './../../img/david_donaldson.jpg';

import flirOP from "./../../media/flir_overview.pdf";
import flirTP from "./../../media/flir_technical.pdf";
import flirIDR from "./../../media/FLIRIDR.pdf";
import flirCDR from "./../../media/FLIRCDR.pdf";
import flirFP from "./../../media/flirFP.pdf";

import gesturP from "./../../media/gestur_poster.pdf";
import gesturIDR from "./../../media/GesturIDR.pdf";
import gesturCDR from "./../../media/GesturCDR.pdf";
import gesturFP from "./../../media/gesturFP.pdf";

import hyperloop2P from "./../../media/hyperloop2_poster.pdf";
import hyperloop2IDR from "./../../media/Hyperloop2IDR.pdf";
import hyperloop2CDR from "./../../media/Hyperloop2CDR.pdf";
import hyperloop2FP from "./../../media/hyperloop2FP.pdf";

import irhubP from "./../../media/irhub_poster.pdf";
import irhubIDR from "./../../media/IRHubIDR.pdf";
import irhubCDR from "./../../media/IRHubCDR.pdf";
import irhubFP from "./../../media/irhubFP.pdf";

import ostracam2P from "./../../media/ostracam2_poster.pdf";
import ostracam2IDR from "./../../media/OstraCam2IDR.pdf";
import ostracam2CDR from "./../../media/OstraCam2CDR.pdf";
import ostracam2FP from "./../../media/ostracam2FP.pdf";

import sonosP from "./../../media/sonoscom_poster.pdf";
import sonosIDR from "./../../media/SONOSIDR.pdf";
import sonosCDR from "./../../media/SONOS2CDR.pdf";
import sonosFP from "./../../media/sonoscomFP.pdf";

import SPOTCDR from "./../../media/SPOTCDR.pdf";
import tersiaScopeCDR from "./../../media/TiresiaScopeCDR.pdf";
import deepVisionCDR from "./../../media/DeepVisionCDR.pdf";
import wallECDR from "./../../media/WALLECDR.pdf";
import gauchoHawkCDR from "./../../media/GauchoHawkCDR.pdf";
import hoverHandCDR from "./../../media/HoverHandCDR.pdf";
import hyperloop3CDR from "./../../media/Hyperloop3CDR.pdf";


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
        name:"Jesus Diera",
        projectId: 2,
        imgName: jesus_diera,
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
        name:"Bryan Lavin-Parmenter",
        projectId: 6,
        imgName: bryan_lavin_parmenter,
        year: "17_18"
      },
      {
        name:"Brandon Pon",
        projectId: 6,
        imgName: brandon_pon,
        year: "17_18"
      },
      {
        name:"Neil O’Bryan",
        projectId: 6,
        imgName: neil_o_bryan,
        year: "17_18"
      },
      {
        name:"Subhodeep Choudhury",
        projectId: 5,
        imgName: subhodeep_choudhury,
        year: "16_17"
      },
      {
        name:"Saurabh Gupta",
        projectId: 6,
        imgName: saurabh_gupta,
        year: "17_18"
      },
      {
        name:"John Bowman",
        projectId: 7,
        imgName: john_bowman,
        year: "17_18"
      },
      {
        name:"Devon Porcher",
        projectId: 7,
        imgName: devon_porcher,
        year: "17_18"
      },
      {
        name:"Brian Young",
        projectId: 7,
        imgName: brian_young,
        year: "17_18"
      },
      {
        name:"Timothy Kwong",
        projectId: 7,
        imgName: timothy_kwong,
        year: "17_18"
      },
      {
        name:"Trevor Hecht",
        projectId: 7,
        imgName: trevor_hecht,
        year: "17_18"
      },
      {
        name:"Jenny Zheng",
        projectId: 8,
        imgName: jenny_zheng,
        year: "17_18"
      },
      {
        name:"Chenghao Jiang",
        projectId: 8,
        imgName: chenghao_jiang,
        year: "17_18"
      },
      {
        name:"Terry Xie",
        projectId: 8,
        imgName: terry_xie,
        year: "17_18"
      },
      {
        name:"Charlie Xu",
        projectId: 8,
        imgName: charlie_xu,
        year: "17_18"
      },
      {
        name:"Veena Chandran",
        projectId: 9,
        imgName: veena_chandran,
        year: "17_18"
      },
      {
        name:"Karthik Kribakaran",
        projectId: 9,
        imgName: karthik_kribakaran,
        year: "17_18"
      },
      {
        name:"Vincent Wang",
        projectId: 9,
        imgName: vincent_wang,
        year: "17_18"
      },
      {
        name:"Wesley Peery",
        projectId: 9,
        imgName: wesley_peery,
        year: "17_18"
      },
      {
        name:"Franklin Tang",
        projectId: 9,
        imgName: franklin_tang,
        year: "17_18"
      },
      {
        name:"Karli Yokotake",
        projectId: 9,
        imgName: karli_yokotake,
        year: "17_18"
      },
      {
        name:"Jack Zang",
        projectId: 10,
        imgName: jack_zang,
        year: "17_18"
      },
      {
        name:"Yesh Ramesh",
        projectId: 10,
        imgName: yesh_ramesh,
        year: "17_18"
      },
      {
        name:"Vikram Sharma",
        projectId: 10,
        imgName: vikram_sharma,
        year: "17_18"
      },
      {
        name:"Richard Young",
        projectId: 10,
        imgName: richard_young,
        year: "17_18"
      },
      {
        name:"Kurt Madland",
        projectId: 10,
        imgName: kurt_madland,
        year: "17_18"
      },
      {
        name:"Shaoyi Zhang",
        projectId: 10,
        imgName: shaoyi_zhang,
        year: "17_18"
      },
      {
        name:"Steven Fields",
        projectId: 11,
        imgName: steven_fields,
        year: "17_18"
      },
      {
        name:"Colin Garrett",
        projectId: 11,
        imgName: colin_garrett,
        year: "17_18"
      },
      {
        name:"Miclos Lobins",
        projectId: 11,
        imgName: miclos_lobins,
        year: "17_18"
      },
      {
        name:"Zach Meyer",
        projectId: 11,
        imgName: zach_meyer,
        year: "17_18"
      },
      {
        name:"Austin Dorotheo",
        projectId: 11,
        imgName: austin_dorotheo,
        year: "17_18"
      },
      {
        name:"Cameron Bijan",
        projectId: 12,
        imgName: cam_bijan,
        year: "17_18"
      },
      {
        name:"Dylan Vanmali",
        projectId: 12,
        imgName: dylan_vanmali,
        year: "17_18"
      },
      {
        name:"Alex Jun",
        projectId: 12,
        imgName: alex_jun,
        year: "17_18"
      },
      {
        name:"Mark Wu",
        projectId: 12,
        imgName: mark_wu,
        year: "17_18"
      },
      {
        name:"David Donaldson",
        projectId: 12,
        imgName: david_donaldson,
        year: "17_18"
      }

      ],
      file: [{
      	name: "Overview Poster",
      	projectId: 0,
      	link: flirOP
      },
      {
      	name: "Technical Poster",
      	projectId: 0,
      	link: flirTP
      },
      {
      	name: "IDR",
      	projectId: 0,
      	link: flirIDR
      },
      {
      	name: "CDR",
      	projectId: 0,
      	link: flirCDR
      },
      {
      	name: "Final Presentation",
      	projectId: 0,
      	link: flirFP
      },
      {
      	name: "Poster",
      	projectId: 1,
      	link: gesturP
      },
      {
      	name: "IDR",
      	projectId: 1,
      	link: gesturIDR
      },
      {
      	name: "CDR",
      	projectId: 1,
      	link: gesturCDR
      },
      {
      	name: "Final Presentation",
      	projectId: 1,
      	link: gesturFP
      },
      {
      	name: "Poster",
      	projectId: 2,
      	link: hyperloop2P
      },
      {
      	name: "IDR",
      	projectId: 2,
      	link: hyperloop2IDR
      },
      {
      	name: "CDR",
      	projectId: 2,
      	link: hyperloop2CDR
      },
      {
      	name: "Final Presentation",
      	projectId: 2,
      	link: hyperloop2FP
      },
      {
      	name: "Poster",
      	projectId: 3,
      	link: irhubP
      },
      {
      	name: "IDR",
      	projectId: 3,
      	link: irhubIDR
      },
      {
      	name: "CDR",
      	projectId: 3,
      	link: irhubCDR
      },
      {
      	name: "Final Presentation",
      	projectId: 3,
      	link: irhubFP
      },
      {
      	name: "Poster",
      	projectId: 4,
      	link: ostracam2P
      },
      {
      	name: "IDR",
      	projectId: 4,
      	link: ostracam2IDR
      },
      {
      	name: "CDR",
      	projectId: 4,
      	link: ostracam2CDR
      },
      {
      	name: "Final Presentation",
      	projectId: 4,
      	link: ostracam2FP
      },
      {
      	name: "Poster",
      	projectId: 5,
      	link: sonosP
      },
      {
      	name: "IDR",
      	projectId: 5,
      	link: sonosIDR
      },
      {
      	name: "CDR",
      	projectId: 5,
      	link: sonosCDR
      },
      {
      	name: "Final Presentation",
      	projectId: 5,
      	link: sonosFP
      },
      {
        name: "CDR",
        projectId: 6,
        link: SPOTCDR
      },
      {
        name: "CDR",
        projectId: 7,
        link: tersiaScopeCDR
      },
      {
        name: "CDR",
        projectId: 8,
        link: deepVisionCDR
      },
      {
        name: "CDR",
        projectId: 9,
        link: wallECDR
      },
      {
        name: "CDR",
        projectId: 10,
        link: gauchoHawkCDR
      },
      {
        name: "CDR",
        projectId: 11,
        link: wallECDR
      },
      {
        name: "CDR",
        projectId: 12,
        link: hyperloop3CDR
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

    var idName = this.props.project.title;
    idName = idName.replace(/ /g,"_");

    return (
          <div className="card blue-grey darken-1 hoverable" id={idName}>
            <div className="card-image">
              <img className="card-img" src={this.props.project.imgName} />
              <span className="card-title">{this.props.project.title}</span>
            </div>
            <div className="card-content white-text">
            	<span className="card-title grey-text text-darken-4">Members</span>
              <p>{memberItems}</p>
              <br></br>
              <span className="card-title grey-text text-darken-4">Description</span>
              <p className="text_left">{this.props.project.description}</p>
            </div>

            <div className="card-action">
              <span className="card-title grey-text text-darken-4">Resources</span><br></br>
            	{fileItems}
            </div>
          </div>
    );
  }
}

export default ProjectItem;
