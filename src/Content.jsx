import './Content.css'
import ButtonLink from './ButtonLink'
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import buttonTheme from './buttonTheme.jsx';
import { styled } from '@mui/material/styles';

import ToggleButton from '@mui/material/ToggleButton'

import Grid from '@mui/material/Grid';

import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import tooltipTheme from './tooltipTheme.jsx'

// import images
import BioCrowdsGif from './images/lanes.gif'
import BulletMLGif1 from './images/bullet_ml_1.gif'
import BulletMLGif2 from './images/bullet_ml_2.gif'
import JamGamesPng1 from './images/jam_games_1.png'
import JamGamesPng2 from './images/jam_games_2.png'
import JamGamesPng3 from './images/jam_games_3.png'
import JamGamesPng4 from './images/jam_games_4.png'


const StyledTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className, tooltip: className }} />
  ))(tooltipTheme);

function Content(props) {
    return <>
        {/*  border: '5px solid black' } */}
        {/* <Container maxWidth={false}   className="rootContent" sx={{ maxWidth:"100%"}}> */}
        <Container sx={{height:"100%"}}>
            <div className="main-content" >
                <section className="introduction">
                    <h1 className="title">ANDRÉ <b>ANTONITSCH</b></h1>
                    <h2 className="sub-title">COMPUTER SCIENTIST, MSc.</h2>
                    <Grid container direction="row" spacing={3}   justifyContent="left" alignItems="center">
                        <Grid item>
                            <p className="summary">
                                Computer scientist living in Plön, Germany.<br />
                                I have a passion for all of Computer Graphics, but specially Rendering and Simulations.<br />
                                I also like creative uses for Computer Vision and Machine Learning.
                                Sometimes you can catch me making games in game jams.</p>
                            {/* <p>Computer scientist living in Plön, Germany.
                                I have a passion for Computer Graphics and Simulations.
                                <br />Sometimes you can catch me making some Jams games.</p> */}
                        </Grid>

                    </Grid>


                </section>


                <section className="section">
                    <h1 className="title">CONTACT / INFO</h1>
                    <Stack spacing={2} direction="row" useFlexGap flexWrap="wrap">
                        <ButtonLink
                            link={"https://github.com/andreantonitsch/portfolio-website/blob/main/Assets/AndreAntonitsch_CV.pdf"}
                            text={"CV"} />
                        <ButtonLink
                            link={"https://github.com/andreantonitsch"}
                            text={"GITHUB"} />
                        {/* <ButtonLink
                            link={"https://twitter.com/AndreAntonitsch"}
                            text={"TWITTER"} /> */}
                        <ButtonLink
                            link={"https://www.linkedin.com/in/andreantonitsch/"}
                            text={"LINKEDIN"} />
                        <ButtonLink
                            link={"mailto:andre.antonitsch@edu.pucrs.br"}
                            text={"E-MAIL"} />
                    </Stack>
                </section>

                <section className="section">
                    <h1 className="title">PORTFOLIO</h1>
                    <Stack spacing={4} >
                        <div className="item">
                            <h3 className="sub-title">PERSONAL PROJECTS</h3>
                            <Stack spacing={2} direction="row" useFlexGap flexWrap="wrap">
                                <ButtonLink
                                    link={"https://github.com/andreantonitsch/boitata-deferred-renderer"}
                                    text={"Vulkan Renderer"} />
                                <ButtonLink
                                    link={"https://github.com/andreantonitsch/bulletml-techdemo"}
                                    text={"BulletML"} 
                                    tooltip={
                                        <>
                                            <Stack spacing={0} direction="column" useFlexGap  sx={{alignItems: "center"}}>
                                            Shoot-em-up games are games where players fly ships<br/>
                                            in a screen full of bullets that form cool patterns.<br/>
                                            BulletML is a markup language that describes those pattenrs.<br/>
                                            I made a Unity3D module to run BulletML scripts and 
                                            render the bullets they represent :)<br/>
                                            <Stack spacing={0} direction="row" useFlexGap  sx={{alignItems: "center"}}>
                                            <img src={BulletMLGif1} alt="Bullet Pattern 1" width={300} height={"auto"} />
                                            <img src={BulletMLGif2} alt="Bullet Pattern 2" width={300} height={"auto"} />
                                            </Stack>
                                            </Stack>
                                        </>
                                    }/>
                                {/* <ButtonLink
                                    link={"https://github.com/andreantonitsch/manifesto-techdemo"}
                                    text={"Boids"} /> */}
                                <ButtonLink
                                    link={"https://github.com/andreantonitsch/biocrowds-techdemo"}
                                    text={"BioCrowds"} 
                                    tooltip={
                                        <>
                                            <Stack spacing={0} direction="column" useFlexGap  sx={{alignItems: "center"}}>
                                            BioCrowds is a crowd simulation model based on colonization of space by simulated agents.<br/>
                                            In this project, I implemented a parallel version of that algorithm as a Unity3D module.<br/>
                                            More details in the repository<br/>
                                            <img src={BioCrowdsGif} alt="lanes" width={600} height={"auto"}/>
                                            </Stack>
                                        </>
                                    }/>
                            </Stack>
                        </div>
                        <div className="item">
                            <h3 className="sub-title">MISCELANEOUS STUFF</h3>
                            <Stack spacing={5} direction="row" useFlexGap flexWrap="wrap" sx={{alignItems: "center"}}>
                                <ButtonLink 
                                    link={"https://mekasasquatch.itch.io"}
                                    text={"Games I Made"}
                                    tooltip={
                                        <>
                                            Every now and then, I make games for fun.<br/>
                                            You can play most of them on my Itch page.<br/>
                                            <Stack spacing={0} direction="row" useFlexGap  sx={{alignItems: "center"}}>
                                            <img src={JamGamesPng1} alt="Camus" width={"auto"} height={300} />
                                            <img src={JamGamesPng2} alt="Manifesto" width={"auto"} height={300} />
                                                <Stack spacing={0} direction="column" useFlexGap flexWrap="wrap" sx={{alignItems: "center"}}>
                                                <img src={JamGamesPng3} alt="Manifesto" width={"auto"} height={150} />
                                                <img src={JamGamesPng4} alt="Manifesto" width={"auto"} height={150} />
                                                </Stack>
                                            </Stack>
                                        </>
                                    } />
                                    <StyledTooltip componentsProps={tooltipTheme} placement="top"
                                                    title={<>Here are some experiments I made while studying CG for web.<br/>
                                                    They are simple shader based experiments.<br/>
                                                    Lineart to play with non-realistic Rendering and quaternion math.<br/>
                                                    Quaternion show some quaternion math based mesh manipulation.</>} 
                                                    className="tooltip" sx={{widht:"fit-content"}}> 
                                    <Stack spacing={2} direction="column" sx={{borderRadius : 0, borderWidth : 2, borderColor:"#ffffff" }} useFlexGap flexWrap="wrap">

                                    <h4 className="sub-title-2">ThreeJS Shaders</h4>
                                        <ButtonLink
                                            link={"https://andreantonitsch.github.io/lineart-hatching/"}
                                            text={"Lineart-Hatching"} />
                                        <ButtonLink
                                            link={"https://andreantonitsch.github.io/quaternion-transforms/"}
                                            text={"Quaternion"} />

                                    </Stack>
                                </StyledTooltip> 
                            </Stack>
                        </div>
                        <div className="item">
                            <h3 className="sub-title">RESEARCH</h3>

                            <Stack spacing={2} direction="row" useFlexGap flexWrap="wrap">
                                <ButtonLink
                                    link={"https://ieeexplore.ieee.org/document/9266020"}
                                    text={"LEGION"} 
                                />
                                <ButtonLink
                                    link={"https://www.researchgate.net/publication/333716721_BioClouds_A_Multi-level_Model_to_Simulate_and_Visualize_Large_Crowds"}
                                    text={"BioClouds"} 
                                    />
                            </Stack>
                        </div>
                    </Stack>
                </section>

            </div>
        </Container>
    </>
}

export default Content

const StyledToggleButton = styled(ToggleButton)(buttonTheme)

