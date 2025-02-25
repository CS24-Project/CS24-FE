import React from 'react';
import * as S from '@routes/Main/Main.style';
import mainImage1 from '@assets/imges/main_img_1.svg';
import subImage1 from '@assets/imges/sub_img_1.svg';

interface TitlePart {
	text: string;
	bold: boolean;
}

interface MainContentProps {
	title: TitlePart[];
	description: string;
	default?: boolean;
}

export const MainContent: React.FC<MainContentProps> = ({ title, description, default: isDefault }) => {
	return (
		<div>
			{isDefault ? (
				<S.GridContainer>
					<S.MainImageBox src={mainImage1} alt="Main Image" />

					<S.ContentBox>
						{title.map((part, index) => (
							<S.MainContentTitle key={index} fontweight={part.bold}>
								{part.text}
								{index === 1 && <br />}
							</S.MainContentTitle>
						))}
						<S.MainContentDescription>{description}</S.MainContentDescription>
						<S.SubImageBox src={subImage1} alt="Sub Image" />
					</S.ContentBox>
				</S.GridContainer>
			) : (
				// todo
				<>
				</>
			)}
		</div>
	);
};
