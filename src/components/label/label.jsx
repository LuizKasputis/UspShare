import React, { Fragment } from 'react';

import { 
    LabelDiv,
    LabelSubMessage,
    LabelTitle,
    LabelImage,
    ContainerLabel
} from "./label.style";
import { StyledLink } from '../fonts/fonts.style';

export class Label extends React.Component {

    codigoDisciplina = (isAvaliacao) => {
        if(isAvaliacao){
            return '/'+this.props.codigoDisciplina;
        }
        return '';
    }

    render() {
        return (
            <ContainerLabel>
                {this.props.labelContent.map((content, index) => content?.redirectUrl
                    ?  (<Fragment key={index+content.titleMessage}>
                        <StyledLink to={{ 
                            pathname: content?.redirectUrl+this.codigoDisciplina(content?.isAvaliacao),
                            state: { nomeDisciplina: this.props.pageName }
                        }}>
                            <LabelDiv>
                                <LabelTitle>{content.titleMessage}</LabelTitle>
                                <LabelImage src={content.iconUrl} alt={content+index}/>
                                <LabelSubMessage>{content.subMessage}</LabelSubMessage>
                            </LabelDiv>
                        </StyledLink>
                    </Fragment>)
                    :  (<Fragment key={index+content.titleMessage}>
                        <LabelDiv>
                            <LabelTitle>{content.titleMessage}</LabelTitle>
                            <LabelImage src={content.iconUrl} alt={content+index}/>
                            <LabelSubMessage>{content.subMessage}</LabelSubMessage>
                        </LabelDiv>
                    </Fragment>)
                )}
            </ContainerLabel>
        );
    };
}