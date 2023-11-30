import {Component} from 'react'
import {
  AppContainer,
  MemeGeneratorContainer,
  Heading,
  FormAndMemeContainer,
  MemeContainer,
  TextContent,
  MemeGeneratorForm,
  CustomLabel,
  CustomInput,
  CustomSelect,
  CustomOption,
  GenerateButton,
} from './styledComponents'

// import {
//   BgContainer,
//   FormContainer,
//   Heading,
//   FormEl,
//   LabelEl,
//   InputEl,
//   SubmitButton,
//   MemeContainerBg,
//   MemeContainer,
//   TopText,
// } from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

// class MemeGenerator extends Component {
//   state = {
//     fontSize: '',
//     topText: '',
//     bottomText: '',
//     bgImage: '',
//     generateMeme: false,
//   }

//   onChangeImageUrl = event => {
//     this.setState({bgImage: event.target.value})
//   }

//   onChangeTopText = event => {
//     this.setState({topText: event.target.value})
//   }

//   onChangeBottomText = event => {
//     this.setState({bottomText: event.target.value})
//   }

//   onChangeFontSize = event => {
//     this.setState({fontSize: event.target.value})
//   }

//   onSubmitForm = event => {
//     event.preventDefault()
//     this.setState({generateMeme: true})
//   }

//   render() {
//     const {fontSize, bgImage, topText, bottomText, generateMeme} = this.state
//     return (
//       <BgContainer>
//         <FormContainer>
//           <Heading isDisplay>Meme Generator</Heading>
//           <FormEl onSubmit={this.onSubmitForm}>
//             <LabelEl htmlFor="imageUrl">Image Url</LabelEl>
//             <InputEl
//               type="text"
//               id="imageUrl"
//               placeholder="Enter the Image Url"
//               onChange={this.onChangeImageUrl}
//             />

//             <LabelEl htmlFor="topText">Top Text</LabelEl>
//             <InputEl
//               type="text"
//               id="topText"
//               placeholder="Enter the Top Text"
//               onChange={this.onChangeTopText}
//             />

//             <LabelEl htmlFor="bottomText">Bottom Text</LabelEl>
//             <InputEl
//               type="text"
//               id="bottomText"
//               placeholder="Enter the Bottom Text"
//               onChange={this.onChangeBottomText}
//             />

//             <LabelEl htmlFor="fontSize">Font Size</LabelEl>
//             <InputEl
//               as="select"
//               value={fontSize}
//               id="fontSize"
//               onChange={this.onChangeFontSize}
//             >
//               {fontSizesOptionsList.map(each => (
//                 <option key={each.optionId} value={each.optionId}>
//                   {each.displayText}
//                 </option>
//               ))}
//             </InputEl>
//             <SubmitButton type="submit">Generate</SubmitButton>
//           </FormEl>
//         </FormContainer>

//         <MemeContainerBg>
//           <Heading>Meme Generator</Heading>
//           <MemeContainer
//             bgImage={bgImage}
//             generateMeme={generateMeme}
//             data-testid="meme"
//           >
//             <TopText fontSize={fontSize}>{topText}</TopText>
//             <TopText fontSize={fontSize}>{bottomText}</TopText>
//           </MemeContainer>
//         </MemeContainerBg>
//       </BgContainer>
//     )
//   }
// }

// second-type----------------------------------------------------------------------------------------------------------------------->

class MemeGenerator extends Component {
  state = {
    backgroundImageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    activeFontSizeOptionId: fontSizesOptionsList[0].optionId,
    backgroundImageUrl: '',
    topText: '',
    bottomText: '',
    activeFontSizeId: '',
  }

  onChangeBackgroundImage = event => {
    this.setState({backgroundImageUrlInput: event.target.value})
  }

  onChangeTopTextInput = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomTextInput = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeFontSizeOptionID = event => {
    this.setState({activeFontSizeOptionId: event.target.value})
  }

  onGenerateMeme = event => {
    event.preventDefault()
    const {
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
      activeFontSizeOptionId,
    } = this.state

    this.setState({
      backgroundImageUrl: backgroundImageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      activeFontSizeId: activeFontSizeOptionId,
    })
  }

  renderMemeGeneratorForm = () => {
    const {
      activeFontSizeOptionId,
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
    } = this.state

    return (
      <MemeGeneratorForm onSubmit={this.onGenerateMeme}>
        <CustomLabel htmlFor="backgroundImageUrl">Image URL</CustomLabel>
        <CustomInput
          type="text"
          id="backgroundImageUrl"
          value={backgroundImageUrlInput}
          onChange={this.onChangeBackgroundImage}
          placeholder="Enter the Image URL"
        />
        <CustomLabel htmlFor="topText">Top Text</CustomLabel>
        <CustomInput
          type="text"
          id="topText"
          value={topTextInput}
          onChange={this.onChangeTopTextInput}
          placeholder="Enter the Top Text"
        />
        <CustomLabel htmlFor="topText">Bottom Text</CustomLabel>
        <CustomInput
          type="text"
          id="bottomText"
          value={bottomTextInput}
          onChange={this.onChangeBottomTextInput}
          placeholder="Enter the Bottom Text"
        />
        <CustomLabel htmlFor="select">Font Size</CustomLabel>
        <CustomSelect
          id="select"
          value={activeFontSizeOptionId}
          onChange={this.onChangeFontSizeOptionID}
        >
          {fontSizesOptionsList.map(eachOption => (
            <CustomOption key={eachOption.optionId} value={eachOption.optionId}>
              {eachOption.displayText}
            </CustomOption>
          ))}
        </CustomSelect>
        <GenerateButton type="submit">Generate</GenerateButton>
      </MemeGeneratorForm>
    )
  }

  renderMeme = () => {
    const {
      backgroundImageUrl,
      topText,
      bottomText,
      activeFontSizeId,
    } = this.state

    return (
      <MemeContainer data-testid="meme" backgroundImage={backgroundImageUrl}>
        <TextContent activeFontSizeId={activeFontSizeId}>{topText}</TextContent>
        <TextContent activeFontSizeId={activeFontSizeId}>
          {bottomText}
        </TextContent>
      </MemeContainer>
    )
  }

  render() {
    return (
      <AppContainer>
        <MemeGeneratorContainer>
          <Heading>Meme Generator</Heading>
          <FormAndMemeContainer>
            {this.renderMeme()}
            {this.renderMemeGeneratorForm()}
          </FormAndMemeContainer>
        </MemeGeneratorContainer>
      </AppContainer>
    )
  }
}

export default MemeGenerator
