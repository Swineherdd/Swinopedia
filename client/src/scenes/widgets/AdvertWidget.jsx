import {Typography, useTheme} from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";


const AdvertWidget = () => 
{
    const {palette} = useTheme();
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;

    return (
			<WidgetWrapper>
				<FlexBetween>
					<Typography color={dark} variant='h5' fontWeight='500'>
						СВИНОБОЙНЯ
					</Typography>
					<Typography color={medium}>СВИНСТВУЙТЕ</Typography>
				</FlexBetween>
				<img
					width='100%'
					height='auto'
					alt='adver'
					src='http://localhost:3001/assets/swins.jpg'
					style={{ borderRadius: '0.75rem', margin: '0.75rem 0' }}
				/>
				<FlexBetween>
					<Typography color={main}>СВИНЬИ ГРЯЗНЫЕ АХАХАХА</Typography>
					<Typography color={main}>ХАХАХАХА СВИНЬИ В ГРЯЗИ АХПЗАХПЗ</Typography>
				</FlexBetween>
			</WidgetWrapper>
		)
};

export default AdvertWidget;