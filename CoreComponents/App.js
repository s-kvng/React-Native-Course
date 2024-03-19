import { useState } from "react";
import {
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
  StatusBar,
  Alert,
  ActivityIndicator,
} from "react-native";

const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <ScrollView>
        {/* <View
        style={{ width: 200, height: 200, backgroundColor: "green" }}
      ></View>
      <View style={{ width: 200, height: 200, backgroundColor: "blue" }}></View> */}
        {/* <Text>
        <Text style={{ color: "white" }}>Hello </Text>
        World
      </Text> */}

        {/* // working with images... 1. static images 2.Network images (use the uri
      format) */}
        {/* <Image source={logoImg} style={{ width: 300, height: 300 }} />
      <Image
        source={{ uri: "https://picsum.photos/300" }}
        style={{ width: 300, height: 300 }}
      /> */}

        {/* <ImageBackground source={logoImg} style={{ flex: 1 }}>
        <Text>Working with image background</Text>
      </ImageBackground> */}

        {/* <Image source={logoImg} style={{ width: 300, height: 300 }} /> */}
        {/* <Text>
          In Windows Server, RAID (Redundant Array of Independent Disks) refers
          to a storage technology that combines multiple physical disks into a
          single logical unit to improve data redundancy, performance, or both.
          Windows Server provides support for various RAID configurations,
          primarily through its built-in storage management tools or third-party
          RAID controllers. Here are some key aspects of RAID in Windows Server:
          Redundancy: RAID configurations such as RAID 1 (mirroring), RAID 5
          (striping with parity), and RAID 6 (dual parity) offer redundancy by
          distributing data across multiple disks in a way that allows for data
          recovery in case of disk failure. This helps ensure data availability
          and minimize the risk of data loss due to hardware failures.
          Performance: RAID configurations like RAID 0 (striping) and RAID 10
          (striping and mirroring) focus on improving performance by
          distributing data across multiple disks and allowing for parallel read
          and write operations. This can lead to faster data access and improved
          throughput, particularly in environments with high I/O demands.
          Flexibility: Windows Server provides flexibility in configuring RAID
          arrays through its storage management tools, allowing administrators
          to create, modify, and monitor RAID configurations based on their
          specific requirements. This includes options for dynamic disk
          management, software RAID configurations, and integration with
          hardware RAID controllers. Data Integrity: RAID configurations with
          parity (such as RAID 5 and RAID 6) provide data integrity by storing
          parity information alongside data blocks, allowing for data
          reconstruction in case of disk failure. This helps maintain data
          consistency and integrity, even in the event of hardware failures. In
          Windows Server, RAID (Redundant Array of Independent Disks) refers to
          a storage technology that combines multiple physical disks into a
          single logical unit to improve data redundancy, performance, or both.
          Windows Server provides support for various RAID configurations,
          primarily through its built-in storage management tools or third-party
          RAID controllers. Here are some key aspects of RAID in Windows Server:
          Redundancy: RAID configurations such as RAID 1 (mirroring), RAID 5
          (striping with parity), and RAID 6 (dual parity) offer redundancy by
          distributing data across multiple disks in a way that allows for data
          recovery in case of disk failure. This helps ensure data availability
          and minimize the risk of data loss due to hardware failures.
          Performance: RAID configurations like RAID 0 (striping) and RAID 10
          (striping and mirroring) focus on improving performance by
          distributing data across multiple disks and allowing for parallel read
          and write operations. This can lead to faster data access and improved
          throughput, particularly in environments with high I/O demands.
          Flexibility: Windows Server provides flexibility in configuring RAID
          arrays through its storage management tools, allowing administrators
          to create, modify, and monitor RAID configurations based on their
          specific requirements. This includes options for dynamic disk
          management, software RAID configurations, and integration with
          hardware RAID controllers. Data Integrity: RAID configurations with
          parity (such as RAID 5 and RAID 6) provide data integrity by storing
          parity information alongside data blocks, allowing for data
          reconstruction in case of disk failure. This helps maintain data
          consistency and integrity, even in the event of hardware failures.
        </Text> */}

        <Button
          title="Alert"
          color={"midnightblue"}
          onPress={() => Alert.alert("Invalid Data")}
        />
        <Button
          title="Alert"
          color={"lightblue"}
          onPress={() => Alert.alert("Invalid Data", "DB has failed")}
        />
        <Button
          title="Alert"
          color={"blue"}
          onPress={() =>
            Alert.alert("CONFIRM REPO", "Delete Repo", [
              {
                text: "OK",
                onPress: () => console.log("Ok was clicked"),
              },
              {
                text: "Cancel",
                onPress: () => console.log("Cancel was clicked"),
              },
            ])
          }
        />

        <ActivityIndicator />
        <ActivityIndicator size={"large"} />
        <ActivityIndicator size={"large"} color={"midnightblue"} />
        <ActivityIndicator
          size={"large"}
          color={"midnightblue"}
          animating={false}
        />

        {/* Working with pressables */}
        {/* <Pressable onPress={() => console.log("Press text")}>
          <Text>
            In Windows Server, RAID (Redundant Array of Independent Disks)
            refers to a storage technology that combines multiple physical disks
            into a single logical unit to improve data redundancy, performance,
            or both. Windows Server provides support for various RAID
            configurations, primarily through its built-in storage management
            tools or third-party RAID controllers. Here are some key aspects of
            RAID in Windows Server: Redundancy: RAID configurations such as RAID
            1 (mirroring), RAID 5 (striping with parity), and RAID 6 (dual
            parity) offer redundancy by distributing data across multiple disks
            in a way that allows for data recovery in case of disk failure. This
            helps ensure data availability and minimize the risk of data loss
            due to hardware failures. Performance: RAID configurations like RAID
            0 (striping) and RAID 10 (striping and mirroring) focus on improving
            performance by distributing data across multiple disks and allowing
            for parallel read and write operations. This can lead to faster data
            access and improved throughput, particularly in environments with
            high I/O demands. Flexibility: Windows Server provides flexibility
            in configuring RAID
          </Text>
        </Pressable>

        <Pressable
          onLongPress={() => console.log("PRESSED ME FOR A LONG TIME ")}
        >
          <Image source={logoImg} style={{ width: 300, height: 300 }} />
        </Pressable> */}

        {/* <Modal
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
          animationType="slide"
          presentationStyle="pageSheet"
        >
          <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
            <Text>This is a modal to provide important information</Text>
            <Button
              title="Close"
              color={"red"}
              onPress={() => setModalVisible(false)}
            />
          </View>
        </Modal> */}

        {/* <StatusBar
          backgroundColor={"green"}
          barStyle={"dark-content"}
          hidden={modalVisible}
        /> */}
      </ScrollView>
    </View>
  );
}
