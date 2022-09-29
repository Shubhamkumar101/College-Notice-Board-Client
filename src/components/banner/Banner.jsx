
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://png.pngtree.com/background/20210714/original/pngtree-simple-dark-red-solid-color-wallpaper-picture-image_1218987.jpg) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
//https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg
const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #FFFFFF;
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading>NIT notice </Heading>
            <SubHeading>project created by Shubham</SubHeading>
        </Image>
    )
}

export default Banner;