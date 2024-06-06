import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import tw from "twrnc";
import Ionicons from "react-native-vector-icons/Ionicons";

const Policy = ({ navigation }) => {
  return (
    <View style={tw`flex-1 bg-white`}>
      <View
        style={tw`flex-row justify-between items-center p-6 pt-12 bg-teal-500`}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <Text style={tw`text-lg font-bold text-white`}>
          Chính sách & Điều khoản
        </Text>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView style={tw`p-6`}>
        <Text style={tw`text-xl font-bold text-teal-500 mb-4`}>
          Các điều khoản và điều kiện về dịch vụ
        </Text>
        <Text style={tw`text-gray-700 mb-4`}>
          Người Sử Dụng cần đọc và đồng ý với những Điều Khoản và Điều Kiện này
          trước khi sử dụng Sản Phẩm/Dịch Vụ.
        </Text>
        <Text style={tw`text-gray-700 mb-4`}>
          CÁC ĐIỀU KHOẢN VÀ ĐIỀU KIỆN VỀ DỊCH VỤ (sau đây gọi tắt là “Điều Khoản
          Chung”) điều chỉnh các quyền và nghĩa vụ của Người Sử Dụng, với tư
          cách là khách hàng, khi sử dụng Sản Phẩm/Dịch Vụ do Nhóm Binance cung
          cấp trên Ứng dụng ySpend.
        </Text>
        <Text style={tw`text-gray-700 mb-4`}>
          Định Nghĩa:
          {"\n"}"Người Sử Dụng" đề cập đến bất kỳ cá nhân nào đăng ký và sử dụng
          Ứng dụng ySpend.
          {"\n"}"Sản Phẩm/Dịch Vụ" bao gồm tất cả các sản phẩm, dịch vụ, tính
          năng, nội dung và chức năng mà Nhóm Binance cung cấp trên Ứng dụng
          ySpend.
          {"\n"}"Ứng dụng" là phần mềm ySpend được cung cấp dưới dạng ứng dụng
          di động.
        </Text>
        <Text style={tw`text-gray-700 mb-4`}>
          Quyền Sử Dụng: Người Sử Dụng có quyền truy cập và sử dụng Sản
          Phẩm/Dịch Vụ theo đúng với các Điều Khoản Chung này. Quyền sử dụng chỉ
          được cấp cho mục đích cá nhân và không được phép chuyển nhượng.
        </Text>
        <Text style={tw`text-gray-700 mb-4`}>
          Hạn Chế: Người Sử Dụng không được phép:
          {"\n"}- Sửa đổi, phân phối lại, sao chép, thuê, cho thuê, bán, tạo ra
          các sản phẩm phái sinh từ bất kỳ phần nào của Sản Phẩm/Dịch Vụ.
          {"\n"}- Sử dụng Sản Phẩm/Dịch Vụ cho mục đích bất hợp pháp hoặc gây
          hại cho Ứng dụng, Nhóm Binance, hoặc bất kỳ bên thứ ba nào.
          {"\n"}- Can thiệp vào hoạt động hoặc truy cập của Ứng dụng và Sản
          Phẩm/Dịch Vụ.
        </Text>
        <Text style={tw`text-gray-700 mb-4`}>
          Bảo Mật và Quyền Riêng Tư: Nhóm Binance cam kết bảo vệ thông tin cá
          nhân của Người Sử Dụng. Chính sách Bảo Mật và Quyền Riêng Tư được áp
          dụng để giải thích cách thông tin cá nhân được thu thập, sử dụng và
          bảo vệ.
        </Text>
        <Text style={tw`text-gray-700 mb-4`}>
          Sửa Đổi Điều Khoản: Nhóm Binance có quyền sửa đổi Điều Khoản Chung này
          bất kỳ lúc nào. Sự thay đổi sẽ có hiệu lực ngay sau khi được đăng tải
          trên Ứng dụng hoặc thông báo cho Người Sử Dụng. Việc tiếp tục sử dụng
          Sản Phẩm/Dịch Vụ sau khi có sửa đổi sẽ coi như là sự đồng ý của Người
          Sử Dụng với những thay đổi đó.
        </Text>
        <Text style={tw`text-gray-700 mb-4`}>
          Giới Hạn Trách Nhiệm: Nhóm Binance không chịu trách nhiệm cho bất kỳ
          thiệt hại nào phát sinh từ việc sử dụng hoặc không thể sử dụng Sản
          Phẩm/Dịch Vụ, kể cả khi Nhóm Binance đã được thông báo về khả năng của
          những thiệt hại đó.
        </Text>
        <Text style={tw`text-gray-700 mb-4`}>
          Quyền Pháp Lý và Giải Quyết Tranh Chấp: Điều Khoản Chung này và mọi
          tranh chấp phát sinh từ hoặc liên quan đến việc sử dụng Sản Phẩm/Dịch
          Vụ sẽ được điều chỉnh và giải quyết theo pháp luật áp dụng. Mọi tranh
          chấp sẽ được giải quyết thông qua thương lượng hoặc trọng tài, nếu
          cần.
        </Text>
        <Text style={tw`text-gray-700 mb-4`}>
          Liên Hệ và Phản Hồi: Mọi câu hỏi, phản hồi hoặc khiếu nại liên quan
          đến Sản Phẩm/Dịch Vụ nên được gửi đến đội ngũ hỗ trợ của Nhóm Binance
          qua thông tin liên hệ được cung cấp trên Ứng dụng.
        </Text>
      </ScrollView>
    </View>
  );
};

export default Policy;
