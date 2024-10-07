import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Icon from '@/assets/images/svg-icon.svg';
import HelloWorld from '@/components/hello-world';

const Home = () => {
  return (
    <SafeAreaView>
      <View className="flex h-full items-center justify-center p-5">
        <Icon width={100} height={100} />
        <View className="mt-5">
          <HelloWorld />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
