import React from 'react';
import Heading from './../components/Heading';
import AboutText from './../components/AboutText';
import AboutTable from './../components/AboutTable';
import styled from '@emotion/styled';

const AboutWrapper = styled.div`
    background: var(--black);
    color: var(--white);
    display: grid;
    grid-template-columns: 4fr 3fr;
    grid-gap: 1em;
    justify-content: center;
`;

const HeadingWrapper = styled.div`
    grid-column: 1/3;
    grid-row: 1/2;
    justify-self: center;
`;

const TextWrapper = styled.div`
    margin: .5em 1.5em;
`;

const SubHeading = styled.h3`
    color: var(--blue);
    font-family: audiowide;
    padding: .3em;
    margin: .1em;
`;

const TableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: .3em;
    padding: .3em;
`;

interface AboutState {
    sectionTitle: string;
    sectionSubtitles: string[];
    sectionText: string[];
    sectionSkills: string[][];
}

export default class About extends React.Component<{}, AboutState> {
    constructor(props: string) {
        super(props);
        this.state = {
            sectionTitle: 'About',
            sectionSubtitles: [
                'Foreword',
                'The Developer',
                'The person',
                'Skills'
            ],
            sectionText: [
                'My name is Jose Diaz Gonzalez, and I am a Full Stack Web Developer based in Tenerife, Spain. In 2015, I moved to Bristol, UK. There I found my passion and started learning everything about Web Development In 2017, I moved back to Spain and got a Diploma in Development of Web Applications. I also went through the EOI\'s Full Stack Web Development Bootcamp.',
                'I am truly passionate about the craft of programming and problem-solving, and love all things web. I specialize in the Front-End, ReactJS and NodeJS, but I can dive into Back-End, databases and DevOps easily. I am a JavaScript/TypeScript advocate but I have dabbled with Java SE/EE and PHP in the past.',
                'When I\'m not building websites, going through CodeWars or promoting OSS -I like indie games, cooking, and playing pool. Oh, also I\'m a dog lover and the proud son of Suka, a half a staffy half dalmatian dog.'
            ],
            sectionSkills: [
                ['HTML/CSS', 'JavaScript', 'TypeScript'],
                ['ReactJS', 'NodeJS', 'Java SE/EE'],
                ['SASS/SCSS', 'MySQL', 'Git'],
                ['Docker']
            ]
        }
    }

    render() {
        const { sectionTitle, sectionSubtitles, sectionText, sectionSkills } = this.state;
        return <AboutWrapper>
            <HeadingWrapper>
                <Heading title={sectionTitle} />
            </HeadingWrapper>
            <TextWrapper>
                <AboutText subtitle={sectionSubtitles[0]} text={sectionText[0]} />
                <AboutText subtitle={sectionSubtitles[1]} text={sectionText[1]} />
                <AboutText subtitle={sectionSubtitles[2]} text={sectionText[2]} />
                <TableWrapper>
                    <SubHeading>{sectionSubtitles[3]}</SubHeading>
                    <AboutTable elements={sectionSkills}/>
                </TableWrapper>
            </TextWrapper>
        </AboutWrapper>
    }
}