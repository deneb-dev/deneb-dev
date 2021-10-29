#include<iostream>
#include <windows.h>
#include <fstream>
using namespace std;

//Fungsi untuk warna teks
void yo(unsigned short color){
	HANDLE hChon=GetStdHandle(STD_OUTPUT_HANDLE);
	SetConsoleTextAttribute(hChon,color);
}

int main(){
	string file = "null",file2 = "null";
	system("title Yogi Surya Prana Ganteng Jangan Lupa Follow IGnya");
	cout<<"                           ********"<<endl;
		cout<<"                       ****        ****"<<endl;
		cout<<"                   ****                ***"<<endl;
		cout<<"                 ****   ****     0000  "<<endl;
		cout<<"                **00   ***   ****  1111"<<endl;
		cout<<"               **11  ***   **    **   0000"<<endl;
		cout<<"              **00  **   **  *  *  **      "<<endl;
		cout<<"              **11       **   **   **      "<<endl;
		cout<<"                           ** ** **    ****"<<endl;
		cout<<"                             ****    ****    "<<endl;
		cout<<"                       0000        ****      "<<endl;
		cout<<"                         1111            11**"<<endl;
		cout<<"                           0000      00****"<<endl;
		cout<<"                                 11****"<<endl;
		cout<<"                           ********"<<endl;
		cout<<"                                                             "<<endl;
		cout<<"0000000000000000000000000000000000000000000000000000000000000"<<endl;
		cout<<"11    **          **    **************      **********     11"<<endl;
		cout<<"11      **      **      **                  **        **   11"<<endl;
		cout<<"11        **  **        ************        **        **   11"<<endl;
		cout<<"11          **                      **      ** *******     11"<<endl;
		cout<<"11          **                      **      **             11"<<endl;
		cout<<"11          **           ***********        **             11"<<endl;
		cout<<"0000000000000000000000000000000000000000000000000000000000000\n\n"<<endl;
		cout<<"Developer : Y5P"<<endl;
		cout<<"Tools Name : Y5PCompilerC#"<<endl;
		cout<<"Instagram : yogisuryapranaw"<<endl;
		cout<<"\nFile cs dengan program ini harus dimasukan ketempat yang sama!"<<endl;
	while(file != "exit"){
		int warna = rand() % 4;//Warna random
		yo(warna+10);
		cout<<"\nMasukan nama file (contoh : yogi) : ";
		getline(cin,file);
		system(("taskkill /IM "+file2+".exe >nul 2>nul").c_str());
		file2 = file;
		ifstream ifile;
	   	ifile.open((file+".cs").c_str());
	   	if(ifile) {
			cout<<"\n\nProgram Selesai Dicompile!\n\n"<<endl;
			system(("C:\\Windows\\Microsoft.NET\\Framework\\v4.0.30319\\csc "+file+".cs >nul 2>nul").c_str());
			system(("start "+file+".exe >nul 2>nul").c_str());
	   } else {
			cout<<"\n\nFile tidak ditemukan!\nPastikan kamu menaruh file ditempat yang sama\n\n"<<endl;;
	   }
	}	   
	   
}
