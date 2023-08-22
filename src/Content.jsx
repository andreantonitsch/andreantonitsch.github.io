import './Content.css'
import ButtonLink from './ButtonLink'
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

function Content() {
    return <>
    {/*  border: '5px solid black' } */}
        <Container maxWidth={false}   className="rootContent" sx={{ maxWidth:"100%"}}>
            <div  className="background" />
            <div  className="main-content" >
                <section className="introduction">
                    <h1 className="title">ANDRÉ <b>ANTONITSCH</b></h1>
                    <h2 className="sub-title">COMPUTER SCIENTIST, MSc.</h2>
                    <p className="summary">Computer scientist living in Plön, Germany.
                        I have a passion for Computer Graphics and Simulations.
                        <br />Sometimes you can catch me making some Jams games.</p>
                </section>


                <section className="section">
                    <h1 className="title">CONTACT / INFO</h1>
                    <Stack spacing={2} direction="row" useFlexGap flexWrap="wrap">
                        <ButtonLink
                            link={""}
                            text={"CV"} />
                        <ButtonLink
                            link={"https://github.com/andreantonitsch"}
                            text={"GITHUB"} />
                        <ButtonLink
                            link={"https://twitter.com/AndreAntonitsch"}
                            text={"TWITTER"} />
                        <ButtonLink
                            link={"https://www.linkedin.com/in/andreantonitsch/"}
                            text={"LINKEDIN"} />
                        <ButtonLink
                            link={"mailto:andre.antonitsch@acad.pucrs.br"}
                            text={"E-MAIL"} />
                    </Stack>
                </section>

                <section className="section">
                    <h1 className="title">PORTFOLIO</h1>
                    <Stack spacing={4} >
                        <div className="item">
                            <h3 className="sub-title">RESEARCH</h3>

                            <Stack spacing={2} direction="row" useFlexGap flexWrap="wrap">
                                <ButtonLink
                                    link={""}
                                    text={"LEGION"} />
                                <ButtonLink
                                    link={""}
                                    text={"BioClouds"} />
                            </Stack>
                        </div>
                        <div className="item">
                            <h3 className="sub-title">Unity Code Samples</h3>
                            <Stack spacing={2} direction="row" useFlexGap flexWrap="wrap">
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
                    </Stack>
                </section>

            </div>
        </Container>
    </>
}

export default Content