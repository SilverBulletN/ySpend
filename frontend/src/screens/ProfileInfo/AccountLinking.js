import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ImageBackground,
  Modal,
  TextInput,
  Alert,
} from "react-native";
import tw from "twrnc";
import Ionicons from "react-native-vector-icons/Ionicons";

const initialBankAccounts = [
  {
    id: "1",
    type: "bank",
    cardType: "Debit Card",
    cardNumber: "6219 8610 2888 8075",
    owner: "BINANCE TEAM",
    expiry: "22/01",
  },
];

const initialEWallets = [
  {
    id: "1",
    type: "ewallet",
    name: "Ví Momo",
    phone: "0123456789",
    icon: require("../../../assets/icons/momo.png"),
  },
  {
    id: "2",
    type: "ewallet",
    name: "Zalo Pay",
    phone: "0123456789",
    icon: require("../../../assets/icons/zalopay.png"),
  },
  {
    id: "3",
    type: "ewallet",
    name: "VNPAY",
    phone: "0123456789",
    icon: require("../../../assets/icons/vnpay.png"),
  },
];

const AccountLinking = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState("bank");
  const [isModalVisible, setModalVisible] = useState(false);
  const [cardType, setCardType] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [owner, setOwner] = useState("");
  const [expiry, setExpiry] = useState("");
  const [bankAccounts, setBankAccounts] = useState(initialBankAccounts);

  const [ewalletName, setEwalletName] = useState("");
  const [ewalletPhone, setEwalletPhone] = useState("");
  const [eWallets, setEWallets] = useState(initialEWallets);

  const handleAddBankAccount = () => {
    if (!cardType || !cardNumber || !owner || !expiry) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    setBankAccounts([
      ...bankAccounts,
      {
        id: String(bankAccounts.length + 1),
        type: "bank",
        cardType,
        cardNumber,
        owner,
        expiry,
      },
    ]);

    setCardType("");
    setCardNumber("");
    setOwner("");
    setExpiry("");
    setModalVisible(false);
  };

  const handleAddEWallet = () => {
    if (!ewalletName || !ewalletPhone) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    setEWallets([
      ...eWallets,
      {
        id: String(eWallets.length + 1),
        type: "ewallet",
        name: ewalletName,
        phone: ewalletPhone,
        icon: require("../../../assets/icons/momo.png"), // Default icon, you can change it accordingly
      },
    ]);

    setEwalletName("");
    setEwalletPhone("");
    setModalVisible(false);
  };

  const handleDeleteBankAccount = (id) => {
    setBankAccounts(bankAccounts.filter((account) => account.id !== id));
  };

  const handleDeleteEWallet = (id) => {
    setEWallets(eWallets.filter((wallet) => wallet.id !== id));
  };

  const renderBankAccountItem = ({ item }) => (
    <View style={tw`mb-4`}>
      <ImageBackground
        source={require("../../../assets/icons/card.png")}
        style={tw`w-full h-50 rounded-lg overflow-hidden`}
      >
        <View style={tw`absolute inset-0 p-4 justify-between`}>
          <View>
            <Text style={tw`text-white text-xl`}>{item.cardType}</Text>
          </View>
          <Text
            style={tw`text-white text-2xl tracking-widest pt-6 self-center`}
          >
            {item.cardNumber}
          </Text>
          <View style={tw`flex-row justify-between`}>
            <Text style={tw`text-white`}>{item.owner}</Text>
            <Text style={tw`text-white`}>{item.expiry}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={tw`absolute top-4 right-4`}
          onPress={() => handleDeleteBankAccount(item.id)}
        >
          <Ionicons name="close-circle-outline" size={24} color="white" />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );

  const renderEWalletItem = ({ item }) => (
    <View
      style={tw`bg-white p-4 rounded-lg mb-4 flex-row justify-between items-center border border-gray-300`}
    >
      <View style={tw`flex-row items-center`}>
        <Image source={item.icon} style={tw`w-10 h-10 mr-4`} />
        <View>
          <Text style={tw`text-gray-700`}>{item.name}</Text>
          <Text style={tw`text-gray-500`}>{item.phone}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => handleDeleteEWallet(item.id)}>
        <Ionicons name="close-circle-outline" size={24} color="gray" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={tw`flex-1 bg-gray-50 p-6 pt-12`}>
      <View style={tw`flex-row justify-between items-center mb-4`}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <Text style={tw`text-lg font-bold text-gray-900`}>Liên kết</Text>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <View style={tw`flex-row justify-around mb-4`}>
        <TouchableOpacity
          onPress={() => setSelectedTab("bank")}
          style={tw`flex-1 items-center ${
            selectedTab === "bank" ? "border-b-2 border-teal-500" : ""
          }`}
        >
          <Text
            style={tw`${
              selectedTab === "bank" ? "text-teal-500" : "text-gray-500"
            }`}
          >
            Thẻ ngân hàng
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedTab("ewallet")}
          style={tw`flex-1 items-center ${
            selectedTab === "ewallet" ? "border-b-2 border-teal-500" : ""
          }`}
        >
          <Text
            style={tw`${
              selectedTab === "ewallet" ? "text-teal-500" : "text-gray-500"
            }`}
          >
            Ví điện tử
          </Text>
        </TouchableOpacity>
      </View>

      {selectedTab === "bank" ? (
        <FlatList
          data={bankAccounts}
          renderItem={renderBankAccountItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={tw`p-4`}
        />
      ) : (
        <FlatList
          data={eWallets}
          renderItem={renderEWalletItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={tw`p-4`}
        />
      )}

      <TouchableOpacity
        style={tw`bg-white border border-gray-300 p-4 rounded-lg flex-row justify-center items-center`}
        onPress={() => setModalVisible(true)}
      >
        <Ionicons name="add-circle-outline" size={24} color="gray" />
        <Text style={tw`ml-2 text-gray-500`}>Thêm liên kết</Text>
      </TouchableOpacity>

      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View
          style={tw`flex-1 justify-center items-center bg-black bg-opacity-50`}
        >
          <View style={tw`bg-white p-6 rounded-lg w-80 text-black`}>
            {selectedTab === "bank" ? (
              <>
                <Text style={tw`text-lg font-bold mb-4`}>
                  Thêm thẻ ngân hàng
                </Text>
                <TextInput
                  style={tw`border-b border-gray-300 py-2 mb-4 text-gray-900`}
                  placeholder="Loại thẻ"
                  value={cardType}
                  onChangeText={setCardType}
                  placeholderTextColor="black"
                />
                <TextInput
                  style={tw`border-b border-gray-300 py-2 mb-4`}
                  placeholder="Số thẻ"
                  value={cardNumber}
                  onChangeText={setCardNumber}
                  keyboardType="numeric"
                  placeholderTextColor="black"
                />
                <TextInput
                  style={tw`border-b border-gray-300 py-2 mb-4`}
                  placeholder="Chủ sở hữu"
                  value={owner}
                  onChangeText={setOwner}
                  placeholderTextColor="black"
                />
                <TextInput
                  style={tw`border-b border-gray-300 py-2 mb-4`}
                  placeholder="Ngày hết hạn"
                  value={expiry}
                  onChangeText={setExpiry}
                  placeholderTextColor="black"
                />
                <TouchableOpacity
                  style={tw`bg-teal-500 p-4 rounded-lg`}
                  onPress={handleAddBankAccount}
                >
                  <Text style={tw`text-center text-white`}>Thêm thẻ</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <Text style={tw`text-lg font-bold mb-4`}>Thêm ví điện tử</Text>
                <TextInput
                  style={tw`border-b border-gray-300 py-2 mb-4`}
                  placeholder="Tên ví"
                  value={ewalletName}
                  onChangeText={setEwalletName}
                  placeholderTextColor="black"
                />
                <TextInput
                  style={tw`border-b border-gray-300 py-2 mb-4`}
                  placeholder="Số điện thoại"
                  value={ewalletPhone}
                  onChangeText={setEwalletPhone}
                  keyboardType="phone-pad"
                  placeholderTextColor="black"
                />
                <TouchableOpacity
                  style={tw`bg-teal-500 p-4 rounded-lg`}
                  onPress={handleAddEWallet}
                >
                  <Text style={tw`text-center text-white`}>Thêm ví</Text>
                </TouchableOpacity>
              </>
            )}
            <TouchableOpacity
              style={tw`absolute top-4 right-4`}
              onPress={() => setModalVisible(false)}
            >
              <Ionicons name="close" size={30} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AccountLinking;
