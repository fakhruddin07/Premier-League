import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol, faFlag, faGlobe, faMars } from '@fortawesome/free-solid-svg-icons'
import './TeamDetail.css'
import twitter from '../Icon/Twitter.png'
import facebook from '../Icon/Facebook.png'
import youtube from '../Icon/YouTube.png'
import male from '../Icon/male.png'
import female from '../Icon/female.png'

const TeamDetail = () => {
    const { teamId } = useParams()
    const [team, setTeams] = useState({})

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams[0]))
    }, [teamId])

    const { strTeamBadge, intFormedYear, strCountry, strSport, strStadiumDescription, strGender,  strTwitter, strFacebook, strYoutube } = team;
    
    return (
        <div>
            <div className='team-bg-img'>
                <img className='team-text' src={strTeamBadge} alt="" />
            </div>
            <div>
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row bg-info mt-2 align-items-center p-3 rounded">
                                    <div className="col-md-6 text-left">
                                        <h1>{team.strTeam}</h1>
                                        <p><FontAwesomeIcon icon={faGlobe} /> Founded : {intFormedYear}</p>
                                        <p><FontAwesomeIcon icon={faFlag} /> Country : {strCountry}</p>
                                        <p><FontAwesomeIcon icon={faFutbol} /> Sports type : {strSport}</p>
                                        <p><FontAwesomeIcon icon={faMars} /> Gender : {strGender}</p>
                                    </div>
                                    <div className="col-md-6">
                                
                                        {
                                            strGender === 'Male' ? <img className='img-fluid' src={male} alt="" /> : <img className='img-fluid' src={female} alt="" />
                                        }
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 text-left">
                                <p className='col-md-12 p-5 text-left'>{strStadiumDescription}</p>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-between">
                            <div className="col-md-12">
                                <div className='logo img-fluid'>
                                    <a href={`https://${strTwitter}`}><img src={twitter} alt="" /></a>
                                    <a href={`https://${strFacebook}`}><img src={facebook} alt="" /></a>
                                    <a href={`https://${strYoutube}`}><img src={youtube} alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamDetail;