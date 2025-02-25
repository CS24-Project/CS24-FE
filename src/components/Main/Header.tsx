import React from 'react';
import * as S from '@routes/Main/Main.style';
import kakao from '@assets/icons/kakao.svg';

export const Header = () => {
    return (
        <S.HeaderContainer>
            <S.HeaderTitle>매일 새로운 CS 도전, CS24와 함께</S.HeaderTitle>
            <S.HeaderSubtitle>
                매일 카카오톡으로 제공되는 AI 생성 CS 문제를 풀며 실시간으로 지식을 습득하고 성장하세요.
            </S.HeaderSubtitle>
            <S.LoginButton>
                <S.KakaoIcon>
                    <img src={kakao} alt="카카오 로그인 아이콘" />
                </S.KakaoIcon>
                카카오 로그인
            </S.LoginButton>
        </S.HeaderContainer>
    );
};
