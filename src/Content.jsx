import './Content.css'
import Bio_crowds from './images/lanes.gif'
import ButtonLink from './ButtonLink'
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import buttonTheme from './buttonTheme.jsx';
import { styled } from '@mui/material/styles';

import ToggleButton from '@mui/material/ToggleButton'

import Grid from '@mui/material/Grid';

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
                            <p className="summary">Computer scientist living in Plön, Germany.
                                I have a passion for Computer Graphics and Simulations.
                                <br />Sometimes you can catch me making some Jams games.</p>
                            {/* <p>Computer scientist living in Plön, Germany.
                                I have a passion for Computer Graphics and Simulations.
                                <br />Sometimes you can catch me making some Jams games.</p> */}
                        </Grid>
{/* 
                        <Grid item>
                            <StyledToggleButton
                                // style={{ position: 'absolute', top: "10px", right: "10px" }}
                                value="check"
                                selected={props.smalluns}
                                onChange={() => {
                                    props.setSmalluns(!props.smalluns);
                                }}
                            >
                                {}
                                Try out a simulation!
                            </StyledToggleButton>
//                        </Grid>
 */}


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
                                    text={"BulletML"} />
                                <ButtonLink
                                    link={"https://github.com/andreantonitsch/manifesto-techdemo"}
                                    text={"Boids"} />
                                <ButtonLink
                                    link={"https://github.com/andreantonitsch/biocrowds-techdemo"}
                                    text={"BioCrowds"} />
                            </Stack>
                        </div>
                        <div className="item">
                            <h3 className="sub-title">MISCELANEOUS STUFF</h3>
                            <Stack spacing={2} direction="row" useFlexGap flexWrap="wrap">
                                <ButtonLink
                                    link={"https://andreantonitsch.github.io/lineart-hatching/"}
                                    text={"Lineart-Hatching"} />
                                <ButtonLink
                                    link={"https://andreantonitsch.github.io/quaternion-transforms/"}
                                    text={"Quaternion"} />
                                <ButtonLink
                                    link={"https://mekasasquatch.itch.io"}
                                    text={"Jam Games"} />
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
                                    tooltip={
                                        <>
                                            <>BioCrowds is a crowd simulation model based on colonization of space by simulated agents.
                                            In this project, I implemented a parallel version of that algorithm as a Unity3D module.
                                            More details in the repository</>
                                            <img src={Bio_crowds} alt="lanes" width={800} height={"auto"} />
                                        </>
                                    }/>
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

