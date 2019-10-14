import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../modifiers/colors';

const { black, orange, white } = colors;

const Wrapper = styled.div`
    height: 56px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    position: fixed;
    width: 100%;
    z-index: 987;
    top: 0;
    background-color: ${white};
    `;
const Linkback = styled.a`
    padding: 1rem 1rem 1rem 0;
    `;
const IconBackUrl = styled.img`
    width: 20px;
    `;
const IconImg = styled.img`
    width: 24px;
    `;
const TextTitle = styled.span`
    color: ${black};
    font-size: 16px;
    font-weight: 600;
    width: 100%;
    position: relative;
    vertical-align: middle;
    text-transform: capitalize;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    `;   
const WrapperIcon = styled.div`
    display: flex;
    justify-content: flex-end;
    `;
const IconRightWrapper = styled.a`
    position: relative;
    padding: 1rem .5rem 1rem 0;
    &:last-child {
        margin-left: 20px;
    }
    `;
const BadgetCount = styled.span`
    position: absolute;
    top: 4px;
    right: -2px;
    width: 20px;
    height: 20px;
    background-color: ${orange};
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-content: center;
    color: ${white};
    border-radius: 100%;
    border: 2px solid ${white};
    padding-top: 0.1rem;
    `;


class Navbar extends PureComponent {
    render() {
        const { children = '', title = '', imgBackUrl, onClick, toLink = '', imgRight = '', imgRightLast='', iconRightMulti = '', iconPositionRight, badge = false, badgeCount } = this.props;
        return (
            <Wrapper>
                <Linkback onClick={onClick}>
                    <IconBackUrl src={imgBackUrl}/>
                </Linkback>
                {
                   title !== '' && <TextTitle title={title}>{title}</TextTitle>
                }
                {children}
                {
                    iconPositionRight &&
                    <WrapperIcon>
                        
                        <IconRightWrapper onClick={onClick}>
                            <IconImg src={imgRight}/>
                        </IconRightWrapper>
                        
                        <IconRightWrapper onClick={onClick}>
                            {
                                badge && <BadgetCount>{badgeCount}</BadgetCount>
                            }
                            <IconImg src={imgRightLast}/>
                        </IconRightWrapper>
                    </WrapperIcon>
                }
            </Wrapper>
        )
    }
}

Navbar.propTypes = {
    title: PropTypes.string,
    imgBackUrl: PropTypes.string,
    imgRight: PropTypes.string,
    imgRightLast: PropTypes.string,
    iconPositionRight: PropTypes.bool,
    badge: PropTypes.bool,
    badgeCount: PropTypes.number,
    onClick: PropTypes.func,
    children: PropTypes.node,    
}

Navbar.defaultProps = {    
    title: undefined,
    imgBackUrl: undefined,
    imgRight: undefined,
    imgRightLast: undefined,
    iconRightMulti: undefined,        
    iconPositionRight: undefined,
    badge: undefined,
    badgeCount: undefined,
    children: null,
    onClick: () => null
}

export default Navbar;