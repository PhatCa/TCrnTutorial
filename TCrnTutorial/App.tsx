import React from 'react';
import {Button, SafeAreaView, ScrollView, Text} from 'react-native';
import {FileTypeEnum, initialize} from 'theta-client-react-native';
import {getThetaInfo} from 'theta-client-react-native';
import {listFiles} from 'theta-client-react-native';

function App(): React.JSX.Element {
  const [thetaInfo, setThetaInfo] = React.useState('');

  React.useEffect(() => {
    const initTheta = async () => {
      try {
        await initialize('http://192.168.1.1', {});

      } catch (error) {
        console.error('Failed to initialize THETA:', error);
      }
    };
    initTheta();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <Button
          title="info"
          onPress={async () => {
            try {
              const info = await getThetaInfo();
              setThetaInfo(JSON.stringify(info, null, 2));
            } catch (error) {
              console.error('Failed to get THETA info:', error);
              setThetaInfo('Error getting THETA info');
            }
          }}
        />
        <Button
          title="list files"
          onPress={async () => {
            try {
              const files = await listFiles(FileTypeEnum.IMAGE, 1, 10);
              setThetaInfo(JSON.stringify(files, null, 2));
            } catch (error) {
              console.error('Failed to get file listing:', error);
              setThetaInfo('Error getting file listing');
            }
          }}
        />
        <Text>{thetaInfo}</Text>
        <Text>{thetaInfo}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;