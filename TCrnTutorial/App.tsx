import React from 'react';
import {Button, SafeAreaView, ScrollView, Text, Image} from 'react-native';
import {FileTypeEnum, initialize} from 'theta-client-react-native';
import {getThetaInfo, listFiles} from 'theta-client-react-native';

interface FileEntry {
  fileUrl: string;
  name: string;
}

function App(): React.JSX.Element {
//   const [thetaInfo, setThetaInfo] = React.useState('');
//   const [listFile, setListFile] = React.useState<FileEntry[]>([]);

  React.useEffect(() => {
    const initTheta = async () => {
      try {
        await initialize('https://fake-theta.vercel.app/', {});
        console.log('inititalize')
      } catch (error) {
        console.error('Failed to initialize THETA:', error);
      }
    };
    initTheta();
  }, []);

  return (
    // <SafeAreaView>
    //   <ScrollView>
    //     <Button
    //       title="info"
    //       onPress={async () => {
    //         try {
    //           const info = await getThetaInfo();
    //           setThetaInfo(JSON.stringify(info, null, 2));
    //           setListFile([]);
    //         } catch (error) {
    //           console.error('Failed to get THETA info:', error);
    //           setThetaInfo('Error getting THETA info');
    //         }
    //       }}
    //     />
    //     {/* <Button
    //       title="list files"
    //       onPress={async () => {
    //         try {
    //           const files = await listFiles(FileTypeEnum.IMAGE, 1, 10);
    //           setListFile(files.fileList);
    //           setThetaInfo('');
    //         } catch (error) {
    //           console.error('Failed to get file listing:', error);
    //           setListFile([]);
    //         }
    //       }}
    //     />
        
    //     {thetaInfo ? <Text>{thetaInfo}</Text> : null}
        
    //     {listFile.map((file) => (
    //       <Image
    //         key={file.name}
    //         source={{ uri: file.fileUrl }}
    //       />
    //     ))} */}

    //     <Button title='take photo'>

    //     </Button>
    //   </ScrollView>
    // </SafeAreaView>
    <Text>hello</Text>
  );
}

export default App;