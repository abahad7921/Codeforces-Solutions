#include<bits/stdc++.h>
using namespace std;
int main()
{int year;
cin>>year;
int val;
 
for(int i=year+1;i<10000;i++)
{
int a4=i%10;
int a3=(i%100-i%10)/10;
int a2=(i%1000-i%100)/100;
int a1=(i-i%1000)/1000;
if(a1!=a2 && a1!=a3 && a1!=a4 && a2!=a3 && a2!=a4 && a3!=a4)
{
    val=i;break;
}}
 
cout<<val<<endl;
    return 0;
 
}